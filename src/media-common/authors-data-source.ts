import { Author } from './models/author';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthorService } from './services/api/author.service';
import { catchError, finalize } from 'rxjs/operators';

export class AuthorsDataSource implements DataSource<Author> {

    // The subject is going to be emitting the values retrieved from the backend
    private authorsSubject = new BehaviorSubject<Author[]>([]);
    // The loading flag, used to display a spinning loading indicator to the user
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(
        private authorService: AuthorService
    ) { }

    // this method will be called once by the Data Table
    connect(collectionViewer: CollectionViewer): Observable<Author[]> {
        return this.authorsSubject.asObservable();
    }

    // called once by data table at component's destruction time (avoid memory leaks)
    disconnect(collectionViewer: CollectionViewer): void {
        this.authorsSubject.complete();
        this.loadingSubject.complete();
    }

    loadAuthors(filter = '', sortDirection = 'asc', pageIndex: number, pageSize = 3) {
        this.loadingSubject.next(true);

        this.authorService.getAuthors(filter, sortDirection, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(authors =>
                this.authorsSubject.next(authors))
    }
}

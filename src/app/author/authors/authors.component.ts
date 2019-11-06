import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthorService } from 'src/media-common/services/api/author.service';
import { Author } from 'src/media-common/models/author';
import { MatPaginator, MatSort } from '@angular/material';
import { AuthorsDataSource } from 'src/media-common/authors-data-source';
import { tap, debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { merge } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  author: Author;
  dataSource: AuthorsDataSource;
  displayedColumns = ["numero", "name", "country"];
  data: unknown;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.author = this.route.snapshot.data["authors"];
    this.dataSource = new AuthorsDataSource(this.authorService);
    this.dataSource.loadAuthors('', 'asc', 0, 3)
  }

  ngAfterViewInit() {
    console.log("this.dataSource", this.dataSource);
    // server-side search
    fromEvent(this.input.nativeElement,'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadAuthorsPage();
        })
      )
      .subscribe();

    // reset the paginator after sorting
    this.sort.sortChange
      .subscribe(() =>
        this.paginator.pageIndex = 0
      );
    console.log("this.sort.sortChange", this.sort);

    // on sort or paginate events, load a new page
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        // startWith({}),
        tap(() => this.loadAuthorsPage()),
        // switchMap(() => {
        //   return this.loadAuthorsPage()
        // }),
      )
      .subscribe(data => {
        this.data = data;
        console.log("data", data);
        console.log("this.paginator", this.paginator);
      });
  }

  loadAuthorsPage() {
    this.dataSource.loadAuthors(
      this.input.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
    console.log("this.input.nativeElement.value", this.input.nativeElement.value);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}

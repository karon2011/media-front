import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Author } from 'src/media-common/models/author';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  // todo
  // url behind an api ?
  private REST_API_SERVER = "http://localhost:3000/authors";

  constructor(
    private http: HttpClient
  ) { }

  getAuthors(filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<Author[]> {
    return this.http.get<Author[]>(this.REST_API_SERVER,
      {
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      }
    )
      .pipe(
        // map(res => res["payload"]),
        catchError(this.handleError<any>('Get Authors', []))
      )
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}

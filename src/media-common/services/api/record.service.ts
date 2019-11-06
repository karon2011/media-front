import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Record } from 'src/media-common/models/record';


@Injectable({
  providedIn: 'root'
})
export class RecordService {

  // todo
  // url behind an api ?
  private REST_API_SERVER = "http://localhost:3000/records";

  constructor(
    private http: HttpClient
  ) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.REST_API_SERVER)
    .pipe(
      catchError(this.handleError<any>('Get Records', []))
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

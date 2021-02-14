import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:5000/user_input_data';

@Injectable({
  providedIn: 'root'
})
export class CheckSurvivalService {

  constructor(private http: HttpClient) { }

  getSurvival(userInputData: any): Observable<any> {
    return this.http.post(endpoint, userInputData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

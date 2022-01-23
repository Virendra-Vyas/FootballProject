import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Positions } from "./positions";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private apiURL = "http://localhost:7777/api";

  constructor(private httpClient: HttpClient) { }

  getPositions(): Observable<Positions[]> {
    return this.httpClient.get<Positions[]>(this.apiURL + '/positions')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

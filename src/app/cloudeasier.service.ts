import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Cloudeasier } from '../app/cloudeasier';
@Injectable({
  providedIn: 'root'
})
export class CloudeasierService {

  constructor(private http:HttpClient) { }

  //recupérer la liste

  getCloud (): Observable<Cloudeasier> {
    return this.http.get<Cloudeasier>('https://api.dev.cloudeasier.com/v0/providers')
    .pipe(
      tap(data => {
        data
      }),
     // catchError(this.handleError('getCloud', []))
    )

  }
}

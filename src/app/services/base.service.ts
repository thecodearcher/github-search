import { ToastService } from '@services/toast/toast.service';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { timeoutWith, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string;
  private _actionUrl: string;
  private timeout: number;

  constructor(public http: HttpClient, private toast: ToastService) {
    this.baseUrl = environment.apiUrl;
    this.timeout = 60000;
  }

  public get<T>(params: string = ''): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${this._actionUrl}?${params}`)
      .pipe(timeoutWith(this.timeout, this.handleTimeout()));

  }

  public setActionUrl(actionUrl: string, path = ''): void {
    this._actionUrl = `${actionUrl}${path}`;
  }


  private handleTimeout(): Observable<any> {
    return new Observable(obs => {
      return obs.error(new HttpErrorResponse({
        statusText: 'Request Timeout',
        status: 408
      }));

    }).pipe(catchError(error => {

      this.toast.show('Request Timed out. Please try again.');

      return throwError(error);
    }));

  }

}

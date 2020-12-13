import { ToastService } from '@services/toast/toast.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private toast: ToastService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {

        if (error instanceof HttpErrorResponse) {
          if (error.status === 403) {
            this.toast.show('Too many requests made. Please take a break and try again later.');

          } else {
            this.toast.show('Please check your network settings and try again.');
          }

        }

        return throwError(error);
      })
    );
  }
}

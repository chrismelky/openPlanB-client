import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor {

  isLoarding = new Subject<boolean>();

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('ID_TOKEN');
    const authToken = (token !== null) ? 'Bearer ' + token : '';

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    this.isLoarding.next(true);

    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.isLoarding.next(false);
          console.log(event.status);
        }
      }, error => {
        this.isLoarding.next(false);
        if (error.status === 401) {

        }

      })
    );
  }

  getProgres(): Subject<boolean> {
    return this.isLoarding;
  }
}

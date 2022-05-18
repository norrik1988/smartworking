import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, of, tap } from 'rxjs';
import { SpinnerService } from '../spinner.service/spinner.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();
  constructor(public spinner: SpinnerService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method !== 'GET') {
      this.spinner.loadSpinner()
      return next.handle(request);
    }

    const cachedResponse = this.cache.get(request.url);
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          this.cache.set(request.url, response);
        }
      })
    );
  }
}

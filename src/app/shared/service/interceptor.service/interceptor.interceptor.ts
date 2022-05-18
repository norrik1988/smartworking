import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { delay, finalize, Observable, of, tap } from 'rxjs';
import { SpinnerService } from '../spinner.service/spinner.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(public spinner: SpinnerService, private loader: Loader) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(() =>
          this.loader.pending = true),
        delay(2000),
        finalize(() => {
          this.loader.pending = false;
        })
      )
  }
}

@Injectable({ providedIn: 'root' })
export class Loader {
  pending = false;
}

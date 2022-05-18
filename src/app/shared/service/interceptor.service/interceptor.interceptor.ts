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
import { UserService } from '../../model/user/service/user.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(public spinner: SpinnerService, public userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        tap(() =>
          this.spinner.showSpinner = true),
        delay(1000),
        finalize(() => {
          this.spinner.showSpinner = false;
        })
      )

  }



}



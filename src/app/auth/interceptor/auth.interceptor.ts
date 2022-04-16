import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('In interceptor');
    if (this.authService.isAuthenticated()) {
      const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token') ?? '');
      const newReq = request.clone({headers});
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}

export const AUTH_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

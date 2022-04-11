import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredentialsDto} from "./dto/credentials.dto";
import {Observable} from "rxjs";
import {LoginResponseDto} from "./dto/login-response.dto";
import {API} from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

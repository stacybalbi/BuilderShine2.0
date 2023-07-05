import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from 'src/app/core/models/User/userDto.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<UserDto>{
  constructor(
    http: HttpClient
  ) {
    super(http, 'auth/sign-in')
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }
}

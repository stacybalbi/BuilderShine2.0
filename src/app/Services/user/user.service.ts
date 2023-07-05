import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(protected override http: HttpClient) {
    super(http, `auth/sign-up`);
  }
}

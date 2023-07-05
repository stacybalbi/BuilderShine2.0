import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Business } from 'src/app/core/models/business.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends BaseService<Business> {

  constructor(protected override http: HttpClient) {
    super(http, `business`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offices } from 'src/app/core/models/offices.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class OfficeService extends BaseService<Offices> {

  constructor(protected override http: HttpClient) {
    super(http, `office`);
  }
}

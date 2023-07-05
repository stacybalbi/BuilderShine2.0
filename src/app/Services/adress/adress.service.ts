import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adress } from 'src/app/core/models/adress.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AdressService extends BaseService<Adress> {

  constructor(protected override http: HttpClient) {
    super(http, `adress`);
  }
}

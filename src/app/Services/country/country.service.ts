import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from 'src/app/core/models/country.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService<Country> {

  constructor(protected override http: HttpClient) {
    super(http, `country`);
  }
}

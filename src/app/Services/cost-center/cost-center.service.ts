import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CostCenter } from 'src/app/core/models/cost-center.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class CostCenterService extends BaseService<CostCenter> {

  constructor(protected override http: HttpClient) {
    super(http, `cost-center`);
  }
}

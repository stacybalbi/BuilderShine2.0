import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from 'src/app/core/models/department.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseService<Department> {

  constructor(protected override http: HttpClient) {
    super(http, `department`);
  }
}
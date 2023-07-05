import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService<Employee> {

  constructor(protected override http: HttpClient) {
    super(http, `employee`);
  }
}

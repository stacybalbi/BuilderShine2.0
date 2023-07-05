import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentEmployee } from 'src/app/core/models/department-employee.models';
import { DepartmentEmployeeDto } from 'src/app/core/models/Department-Employee/department-employeeDto.models';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentEmployeeService extends BaseService<DepartmentEmployee> {

  constructor(protected override http: HttpClient) {
    super(http, `department-employee`);
  }
}

import { DepartmentDto } from "../Department/departmentDto.models";
import { EmployeeDto } from "../Employee/employeeDto.models";

export interface DepartmentEmployeeDto{

    departmentId: DepartmentDto,
    employeeId: EmployeeDto
}
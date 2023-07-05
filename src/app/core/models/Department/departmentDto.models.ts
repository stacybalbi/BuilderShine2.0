import { EmployeeDto } from "../Employee/employeeDto.models";
import { OfficesDto } from "../Offices/officesDto.models";

export interface DepartmentDto{

    name: string,
    officeId: OfficesDto,
    bossId: EmployeeDto

}
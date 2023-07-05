import { BaseModels } from "./base.models";
import { Department } from "./department.models";
import { Employee } from "./employee.models";

export interface DepartmentEmployee extends BaseModels{

    department: Department,
    employee: Employee
}
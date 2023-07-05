import { BaseModels } from "./base.models";
import { Employee } from "./employee.models";
import { Offices } from "./offices.models";

export interface Department extends BaseModels{
   
    name: string,
    office: Offices,
    boss: Employee

}
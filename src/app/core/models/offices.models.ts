import { OfficeDescription } from "../enums/office-description.enum";
import { Adress } from "./adress.models";
import { BaseModels } from "./base.models";
import { Business } from "./business.models";

export interface Offices extends BaseModels{
   
    name: string,
    adress: Adress,
    business: Business 
}
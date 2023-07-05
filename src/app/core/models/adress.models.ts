import { BaseModels } from "./base.models";
import { Country } from "./country.models";

export interface Adress extends BaseModels{
  
    street: string,
    numeration: string,
    city: string,
    state: string,
    postCode: string,
    country: Country 
}
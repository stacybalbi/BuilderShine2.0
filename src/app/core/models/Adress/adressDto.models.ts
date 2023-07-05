
import { CountryDto } from "../Country/countryDto.models";

export interface AdressDto{
  
    street: string,
    numeration: string,
    city: string,
    state: string,
    postCode: string,
    countryId: CountryDto 
}
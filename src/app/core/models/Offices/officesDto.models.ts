import { OfficeDescription } from "../../enums/office-description.enum";
import { AdressDto } from "../Adress/adressDto.models";
import { BusinessDto } from "../Business/businessDto.models";


export interface OfficesDto{
   
    description: OfficeDescription,
    adress: AdressDto,
    business: BusinessDto 
}
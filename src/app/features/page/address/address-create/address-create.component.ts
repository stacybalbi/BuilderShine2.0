import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdressDto } from 'src/app/core/models/Adress/adressDto.models';
import { AdressService } from 'src/app/Services/adress/adress.service';
import { Location} from '@angular/common';
import { Country } from 'src/app/core/models/country.models';
import { CountryService } from 'src/app/Services/country/country.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.scss']
})
export class AddressCreateComponent implements OnInit {

  public dataform : FormGroup = new FormGroup([]);

  country!: Country[];

  constructor(
    private addressservice : AdressService,
    private countryService : CountryService,
    private location: Location
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {
        street : new FormControl(''),      
        numeration : new FormControl(''),
        city : new FormControl(''),
        state : new FormControl(''),
        postCode : new FormControl(''),
        countryId : new FormControl('')
      }
    ) }

    

  ngOnInit(): void {
    this.initializeForm();
    this.getcountry();
  }


  submit(){
    const createadress : AdressDto = { 
      ...this.dataform.value
    } as AdressDto;
  
    this.addressservice.create(createadress).subscribe(()=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Successfully created'
      })
      this.goBack();
    },()=>{
      Swal.fire(
        'Error',
        'incorrect data/500 (Internal Server Error)',
        'error'
      )
    } 
    );

  }
  goBack() {
    this.location.back();
  }

  getcountry(){
    this.countryService.get().subscribe(({data} : any) => {
      this.country = data
    });
  }

}

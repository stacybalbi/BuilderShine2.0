import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CostCenter } from 'src/app/core/models/cost-center.models';
import { CostCenterService } from 'src/app/Services/cost-center/cost-center.service';
import { CountryService } from 'src/app/Services/country/country.service';
import { Location} from '@angular/common';
import { CountryDto } from 'src/app/core/models/Country/countryDto.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.scss']
})
export class CountryCreateComponent implements OnInit {

  public dataform : FormGroup = new FormGroup([]);

  costcenter!: CostCenter[];

  constructor(
    private costcenterServices: CostCenterService,
    private countryServices: CountryService,
    private location: Location
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {
        name : new FormControl(''),      
        costCenterId : new FormControl('')
      }
    ) }

    

  ngOnInit(): void {
    this.initializeForm();
    this.getCostCenter();
  }


  submit(){
    const createcountry : CountryDto = { 
      ...this.dataform.value
    } as CountryDto;
  
    this.countryServices.create(createcountry).subscribe(()=>{
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

  getCostCenter(){
    this.costcenterServices.get().subscribe(({data} : any) => {
      this.costcenter = data
    });
  }

}

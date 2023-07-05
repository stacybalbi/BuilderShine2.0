import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BusinessService } from 'src/app/Services/business/business.service';
import { Location} from '@angular/common';
import { BusinessDto } from 'src/app/core/models/Business/businessDto.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.scss']
})
export class BusinessCreateComponent implements OnInit {

  public dataform : FormGroup = new FormGroup([]);

  constructor(
    private businessService: BusinessService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.dataform = new FormGroup({
      name: new FormControl('')
    })
  }

  goBack() {
    this.location.back();
  }

  submit(){
    const createBusiness: BusinessDto = {
    ...this.dataform.value
    } as BusinessDto;
  
      this.businessService.create(createBusiness).subscribe(()=>{
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




}

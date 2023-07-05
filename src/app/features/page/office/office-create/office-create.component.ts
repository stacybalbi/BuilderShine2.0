import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Adress } from 'src/app/core/models/adress.models';
import { Business } from 'src/app/core/models/business.models';
import { AdressService } from 'src/app/Services/adress/adress.service';
import { OfficeService } from 'src/app/Services/office/office.service';
import { BusinessService } from 'src/app/Services/business/business.service';
import { Offices } from 'src/app/core/models/offices.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-office-create',
  templateUrl: './office-create.component.html',
  styleUrls: ['./office-create.component.scss']
})
export class OfficeCreateComponent implements OnInit {


  public dataform: FormGroup = new FormGroup([]);

  adress!: Adress[];
  business!: Business[];

  constructor(
    private adressService: AdressService,
    private officeService: OfficeService,
    private businessService: BusinessService,
    private location: Location
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {
        name: new FormControl(''),
        adressId: new FormControl(''),
        businessId: new FormControl('')

      }
    )
  }



  ngOnInit(): void {
    this.initializeForm();
    this.getAdress();
    this.getBusiness();
  }


  submit() {
    const createoffice: Offices = {
      ...this.dataform.value
    } as Offices;

    this.officeService.create(createoffice).subscribe(() => {
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
    }, () => {
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

  getAdress() {
    this.adressService.get().subscribe(({ data }: any) => {
      this.adress = data
    });
  }

  getBusiness() {
    this.businessService.get().subscribe(({ data }: any) => {
      this.business = data
    });
  }


}

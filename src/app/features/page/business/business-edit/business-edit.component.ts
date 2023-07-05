import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/Services/business/business.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Business } from 'src/app/core/models/business.models';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-business-edit',
  templateUrl: './business-edit.component.html',
  styleUrls: ['./business-edit.component.scss']
})
export class BusinessEditComponent implements OnInit {

  public dataform: FormGroup = new FormGroup([]);

  business!: Business;

  constructor(
    private businessService: BusinessService,
    private location: Location,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getById();
  }

  private initializeForm(): void {
    this.dataform = new FormGroup({
      name: new FormControl('')
    })
  }
  getById() {
    let businessId = this.activateRouter.snapshot.paramMap.get('id');
    this.businessService.loadById(businessId).subscribe(({ data }: any) => {
      this.business = data;
      this.dataform.setValue({

        'name': this.business.name

      })
    })
  }
  goBack() {
    this.location.back();
  }

  submit() {
    let businessId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Business = {
      ...this.dataform.value,
       } as Business;
    this.Updatebusiness(edit, businessId)

    

  }

  Updatebusiness(business: Business, id: any) {
    this.businessService.update(business, id).subscribe(() => {
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
        title: 'Successfully edited'
      })
      this.goBack();
    }, (error) => {
      Swal.fire(
        'Error',
        'incorrect data/500 (Internal Server Error)',
        'error'
      )
    }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Adress } from 'src/app/core/models/adress.models';
import { Business } from 'src/app/core/models/business.models';
import { Offices } from 'src/app/core/models/offices.models';
import { OfficeService } from 'src/app/Services/office/office.service';
import { AdressService } from 'src/app/Services/adress/adress.service';
import { BusinessService } from 'src/app/Services/business/business.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-office-edit',
  templateUrl: './office-edit.component.html',
  styleUrls: ['./office-edit.component.scss']
})
export class OfficeEditComponent implements OnInit {

 

  public dataform : FormGroup = new FormGroup([]);

  adress! : Adress[];
  business!: Business[];
  office!: Offices;

  constructor(
    private officeService: OfficeService,
    private adressservice : AdressService,
    private businessService : BusinessService,
    private location: Location,
    private activateRouter: ActivatedRoute
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {     
        name: new FormControl(''),
        adressId : new FormControl(''),
        businessId : new FormControl('')

      }
    ) }

    

  ngOnInit(): void {
    this.initializeForm();
    this.getadress();
    this.getbusiness();
    this.getById();
  }


  getById() {
    let officeId = this.activateRouter.snapshot.paramMap.get('id');
    this.officeService.loadById(officeId).subscribe(({ data }: any) => {
      this.office = data;
      this.dataform.setValue({
        'name': this.office.name,
        'adressId': this.findadressByName(this.office.adress.street)?.id,
        'businessId': this.findbusinessByName(this.office.business.name)?.id
      })

      this.dataform.valueChanges.subscribe(data => console.log(data))
    });
  }

  submit() {
    let officeId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Offices = {
      ...this.dataform.value,
      adress: this.findadressById(this.dataform.value.adressId),
      business: this.findbusinessById(this.dataform.value.businessId)
    } as Offices;
    this.UpdateAdress(edit, officeId)


  }

  UpdateAdress(office: Offices, id: any) {
    this.officeService.update(office, id).subscribe(() => {
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
  goBack() {
    this.location.back();
  }



  findadressByName(adressname: string) {
    return this.adress.find(x => x.street == adressname)
  }
  findadressById(adressId: string) {
    return this.adress.find(x => x.id == adressId)
  }

  findbusinessByName(businessname: string) {
    return this.business.find(x => x.name == businessname)
  }
  findbusinessById(businessId: string) {
    return this.business.find(x => x.id == businessId)
  }


  getadress(){
    this.adressservice.get().subscribe(({data} : any) => {
      this.adress = data
    });
  }

  getbusiness(){
    this.businessService.get().subscribe(({data} : any) => {
      this.business = data
    });
  }



}

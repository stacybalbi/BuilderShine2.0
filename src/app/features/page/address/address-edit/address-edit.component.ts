import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country } from 'src/app/core/models/country.models';
import { AdressService } from 'src/app/Services/adress/adress.service';
import { CountryService } from 'src/app/Services/country/country.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Adress } from 'src/app/core/models/adress.models';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent implements OnInit {
  public dataform: FormGroup = new FormGroup([]);

  Adress!: Adress;
  country!: Country[];

  constructor(
    private addressService: AdressService,
    private countryService: CountryService,
    private location: Location,
    private activateRouter: ActivatedRoute
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {
        street: new FormControl(''),
        numeration: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        postCode: new FormControl(''),
        countryId: new FormControl('')
      }
    )
  }



  ngOnInit(): void {
    this.initializeForm();
    this.getcountry();
    this.getById();
  }

  getById() {
    let adressId = this.activateRouter.snapshot.paramMap.get('id');
    this.addressService.loadById(adressId).subscribe(({ data }: any) => {
      this.Adress = data;
      this.dataform.setValue({
        'street': this.Adress.street,
        'numeration': this.Adress.numeration,
        'city': this.Adress.city,
        'state': this.Adress.state,
        'postCode': this.Adress.postCode,
        'countryId': this.findCountryByName(this.Adress.country.name)?.id
      })

      this.dataform.valueChanges.subscribe(data => console.log(data))
    });
  }

  submit() {
    let adressId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Adress = {
      ...this.dataform.value,
      country: this.findCountryById(this.dataform.value.countryId)
    } as Adress;
    this.UpdateAdress(edit, adressId)

  }

  UpdateAdress(adress: Adress, id: any) {
    this.addressService.update(adress, id).subscribe(() => {
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

  getcountry() {
    this.countryService.get().subscribe(({ data }: any) => {
      this.country = data
    });
  }

  findCountryByName(Countryname: string) {
    return this.country.find(x => x.name == Countryname)
  }
  findCountryById(CountryId: string) {
    return this.country.find(x => x.id == CountryId)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CostCenter } from 'src/app/core/models/cost-center.models';
import { CostCenterService } from 'src/app/Services/cost-center/cost-center.service';
import { CountryService } from 'src/app/Services/country/country.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/core/models/country.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.scss']
})
export class CountryEditComponent implements OnInit {


  public dataform: FormGroup = new FormGroup([]);

  country!: Country;
  costcenter!: CostCenter[];

  constructor(
    private costcenterServices: CostCenterService,
    private countryService: CountryService,
    private location: Location,
    private activateRouter: ActivatedRoute
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {
        name: new FormControl(''),
        costCenterId: new FormControl('')
      }
    )
  }



  ngOnInit(): void {
    this.initializeForm();
    this.getCostCenter();
    this.getById();
  }

  getById() {
    let countryId = this.activateRouter.snapshot.paramMap.get('id');
    this.countryService.loadById(countryId).subscribe(({ data }: any) => {
      this.country = data;
      this.dataform.setValue({
        'name': this.country.name,
        'costCenterId': this.findByName(this.country.costCenter.name)?.id
      })

      this.dataform.valueChanges.subscribe(data => console.log(data))
    });
  }

  submit() {
    let countryId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Country = {
      ...this.dataform.value,
      country: this.findById(this.dataform.value.countryId)
    } as Country;
    this.UpdateCountry(edit, countryId)

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


  }

  UpdateCountry(country: Country, id: any) {
    this.countryService.update(country, id).subscribe(() => {
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

  findByName(costCenterName: string) {
    return this.costcenter.find(x => x.name == costCenterName)
  }
  findById(costCenterId: string) {
    return this.costcenter.find(x => x.id == costCenterId)
  }

  getCostCenter() {
    this.costcenterServices.get().subscribe(({ data }: any) => {
      this.costcenter = data
    });
  }


}

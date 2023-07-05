import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { CostCenterService } from 'src/app/Services/cost-center/cost-center.service';
import { CostCenter } from 'src/app/core/models/cost-center.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cost-center-edit',
  templateUrl: './cost-center-edit.component.html',
  styleUrls: ['./cost-center-edit.component.scss']
})
export class CostCenterEditComponent implements OnInit {

  public dataform: FormGroup = new FormGroup([]);

  costCenter!: CostCenter;

  constructor(
    private costCenterService: CostCenterService,
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
    let costCenterId = this.activateRouter.snapshot.paramMap.get('id');
    this.costCenterService.loadById(costCenterId).subscribe(({ data }: any) => {
      this.costCenter = data;
      this.dataform.setValue({

        'name': this.costCenter.name

      })
    })
  }
  goBack() {
    this.location.back();
  }

  submit() {
    let costCenterId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: CostCenter = {
      ...this.dataform.value,
       } as CostCenter;
    this.UpdatecostCenter(edit, costCenterId)

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

  UpdatecostCenter(costCenter: CostCenter, id: any) {
    this.costCenterService.update(costCenter, id).subscribe(() => {
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

import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { CostCenterService } from 'src/app/Services/cost-center/cost-center.service';
import { CostCenterDto } from 'src/app/core/models/Cost-Centetr/cost-centerDto.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cost-center-create',
  templateUrl: './cost-center-create.component.html',
  styleUrls: ['./cost-center-create.component.scss']
})
export class CostCenterCreateComponent implements OnInit {

  public dataform : FormGroup = new FormGroup([]);

  constructor(
    private costcenterService: CostCenterService,
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
    const createcostcenter: CostCenterDto = {
    ...this.dataform.value
    } as CostCenterDto;
  
      this.costcenterService.create(createcostcenter).subscribe(()=>{
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

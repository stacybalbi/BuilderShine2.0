import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeDto } from 'src/app/core/models/Employee/employeeDto.models';
import { EmployeeService } from 'src/app/Services/employee/employee.service';
import { Location} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

  public dataform : FormGroup = new FormGroup([]);

  constructor(
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.dataform = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl('')
    })
  }

  goBack() {
    this.location.back();
  }

  submit(){
    const createemployee: EmployeeDto = {
    ...this.dataform.value
    } as EmployeeDto;
  
      this.employeeService.create(createemployee).subscribe(()=>{
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

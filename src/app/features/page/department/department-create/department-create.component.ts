import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location} from '@angular/common';
import { Offices } from 'src/app/core/models/offices.models';
import { DepartmentService } from 'src/app/Services/department/department.service';
import { OfficeService } from 'src/app/Services/office/office.service';
import { DepartmentDto } from 'src/app/core/models/Department/departmentDto.models';
import { Employee } from 'src/app/core/models/employee.models';
import { EmployeeService } from 'src/app/Services/employee/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent implements OnInit {

  public dataform : FormGroup = new FormGroup([]);

  office! : Offices[];
  employee!: Employee[];

  constructor(
    private departmentservice : DepartmentService,
    private officeService : OfficeService,
    private employeeService : EmployeeService,
    private location: Location
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {
        name : new FormControl(''),      
        officeId : new FormControl(''),
        bossId : new FormControl('')

      }
    ) }

    

  ngOnInit(): void {
    this.initializeForm();
    this.getoffice();
    this.getEmployee();
  }


  submit(){
    const createdepartment : DepartmentDto = { 
      ...this.dataform.value
    } as DepartmentDto;
  
    this.departmentservice.create(createdepartment).subscribe(()=>{
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

  getoffice(){
    this.officeService.get().subscribe(({data} : any) => {
      this.office = data
    });
  }

  getEmployee(){
    this.employeeService.get().subscribe(({data} : any) => {
      this.employee = data
    });
  }


}

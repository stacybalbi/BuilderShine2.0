import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartmentEmployeeDto } from 'src/app/core/models/Department-Employee/department-employeeDto.models';
import { Department } from 'src/app/core/models/department.models';
import { Employee } from 'src/app/core/models/employee.models';
import { Location} from '@angular/common';
import { DepartmentService } from 'src/app/Services/department/department.service';
import { EmployeeService } from 'src/app/Services/employee/employee.service';
import { DepartmentEmployeeService } from 'src/app/Services/department-employee/department-employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-employee-create',
  templateUrl: './department-employee-create.component.html',
  styleUrls: ['./department-employee-create.component.scss']
})
export class DepartmentEmployeeCreateComponent implements OnInit {

    public dataform : FormGroup = new FormGroup([]);

  department! : Department[];
  employee!: Employee[];

  constructor(
    private departmentEmployeeService: DepartmentEmployeeService,
    private departmentservice : DepartmentService,
    private employeeService : EmployeeService,
    private location: Location
  ) { }
  private initializeForm(): void {
    this.dataform = new FormGroup(
      {     
        departmentId : new FormControl(''),
        employeeId : new FormControl('')

      }
    ) }

    

  ngOnInit(): void {
    this.initializeForm();
    this.getDepartment();
    this.getEmployee();
  }


  submit(){
    const createdepartment : Department = { 
      ...this.dataform.value
    } as Department;
  
    this.departmentEmployeeService.create(createdepartment).subscribe(()=>{
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

  getDepartment(){
    this.departmentservice.get().subscribe(({data} : any) => {
      this.department = data
    });
  }

  getEmployee(){
    this.employeeService.get().subscribe(({data} : any) => {
      this.employee = data
    });
  }


}

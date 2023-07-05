import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Department } from 'src/app/core/models/department.models';
import { Employee } from 'src/app/core/models/employee.models';
import { DepartmentEmployeeService } from 'src/app/Services/department-employee/department-employee.service';
import { DepartmentService } from 'src/app/Services/department/department.service';
import { EmployeeService } from 'src/app/Services/employee/employee.service';
import { DepartmentEmployee } from 'src/app/core/models/department-employee.models';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-employee-edit',
  templateUrl: './department-employee-edit.component.html',
  styleUrls: ['./department-employee-edit.component.scss']
})
export class DepartmentEmployeeEditComponent implements OnInit {

 

  public dataform : FormGroup = new FormGroup([]);

  department! : Department[];
  employee!: Employee[];
  departmentEmployee!: DepartmentEmployee;

  constructor(
    private departmentEmployeeService: DepartmentEmployeeService,
    private departmentservice : DepartmentService,
    private employeeService : EmployeeService,
    private location: Location,
    private activateRouter: ActivatedRoute
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
    this.getById();
  }


  getById() {
    let departmentEmployeeId = this.activateRouter.snapshot.paramMap.get('id');
    this.departmentEmployeeService.loadById(departmentEmployeeId).subscribe(({ data }: any) => {
      this.departmentEmployee = data;
      this.dataform.setValue({
        'departmentId': this.finddepartmentByName(this.departmentEmployee.department.name)?.id,
        'employeeId': this.findemployeeByName(this.departmentEmployee.employee.name)?.id
      })

      this.dataform.valueChanges.subscribe(data => console.log(data))
    });
  }

  submit() {
    let departmentEmployeeId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: DepartmentEmployee = {
      ...this.dataform.value,
      department: this.finddepartmentById(this.dataform.value.departmentId),
      employee: this.findemployeeById(this.dataform.value.employeeId)
    } as DepartmentEmployee;
    this.UpdateAdress(edit, departmentEmployeeId)



  }

  UpdateAdress(departmentEmployee: DepartmentEmployee, id: any) {
    this.departmentEmployeeService.update(departmentEmployee, id).subscribe(() => {
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



  finddepartmentByName(departmentname: string) {
    return this.department.find(x => x.name == departmentname)
  }
  finddepartmentById(departmentId: string) {
    return this.department.find(x => x.id == departmentId)
  }

  findemployeeByName(employeename: string) {
    return this.employee.find(x => x.name == employeename)
  }
  findemployeeById(employeeId: string) {
    return this.employee.find(x => x.id == employeeId)
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


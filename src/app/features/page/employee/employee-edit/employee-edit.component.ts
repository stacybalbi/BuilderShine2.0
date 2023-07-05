import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.models';
import { EmployeeService } from 'src/app/Services/employee/employee.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  public dataform: FormGroup = new FormGroup([]);

  employee!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private location: Location,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getById();
  }

  private initializeForm(): void {
    this.dataform = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl('')
    })
  }
  getById() {
    let employeeId = this.activateRouter.snapshot.paramMap.get('id');
    this.employeeService.loadById(employeeId).subscribe(({ data }: any) => {
      this.employee = data;
      this.dataform.setValue({

        'name': this.employee.name,
        'lastname': this.employee.lastname

      })
    })
  }
  goBack() {
    this.location.back();
  }

  submit() {
    let employeeId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Employee = {
      ...this.dataform.value,
       } as Employee;
    this.Updateemployee(edit, employeeId)




  }

  Updateemployee(employee: Employee, id: any) {
    this.employeeService.update(employee, id).subscribe(() => {
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

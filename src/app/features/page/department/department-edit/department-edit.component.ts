import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Offices } from 'src/app/core/models/offices.models';
import { DepartmentService } from 'src/app/Services/department/department.service';
import { EmployeeService } from 'src/app/Services/employee/employee.service';
import { OfficeService } from 'src/app/Services/office/office.service';
import { Location} from '@angular/common';
import { Employee } from 'src/app/core/models/employee.models';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/core/models/department.models';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {

 
  public dataform : FormGroup = new FormGroup([]);

  office! : Offices[];
  employee!: Employee[];
  department!: Department;

  constructor(
    private departmentService : DepartmentService,
    private officeService : OfficeService,
    private employeeService : EmployeeService,
    private location: Location,
    private activateRouter: ActivatedRoute
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
    this.getById();
  }

  getById() {
    let departmentId = this.activateRouter.snapshot.paramMap.get('id');
    this.departmentService.loadById(departmentId).subscribe(({ data }: any) => {
      this.department = data;
      this.dataform.setValue({
        'name': this.department.name,
        'officeId': this.findOfficeByName(this.department.office.name)?.id,
        'bossId': this.findBossByName(this.department.boss.name)?.id
      })

      this.dataform.valueChanges.subscribe(data => console.log(data))
    });
  }

  submit() {
    let departmentId = this.activateRouter.snapshot.paramMap.get('id');
    const edit: Department = {
      ...this.dataform.value,
      office: this.findOfficeById(this.dataform.value.officeId),
      boss: this.findBossById(this.dataform.value.employeeId)
    } as Department;
    this.UpdateAdress(edit, departmentId)


  }

  UpdateAdress(department: Department, id: any) {
    this.departmentService.update(department, id).subscribe(() => {
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



  findOfficeByName(Officename: string) {
    return this.office.find(x => x.name == Officename)
  }
  findOfficeById(OfficeId: string) {
    return this.office.find(x => x.id == OfficeId)
  }

  findBossByName(Bossname: string) {
    return this.employee.find(x => x.name == Bossname)
  }
  findBossById(BossId: string) {
    return this.employee.find(x => x.id == BossId)
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

import { Component, OnInit } from '@angular/core';
import { DepartmentEmployee } from 'src/app/core/models/department-employee.models';
import { DepartmentEmployeeService } from 'src/app/Services/department-employee/department-employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-employee-list',
  templateUrl: './department-employee-list.component.html',
  styleUrls: ['./department-employee-list.component.scss']
})
export class DepartmentEmployeeListComponent implements OnInit {

  department!: DepartmentEmployee[];

  constructor( 
    private departmentemployeeService: DepartmentEmployeeService
  ) { }

  ngOnInit(): void {
    this.getDepartmentEmployee();
  }

  getDepartmentEmployee(){
    this.departmentemployeeService.get().subscribe(({data} : any) => {
      this.department = data
    });
  }

  delete(departmentId: string){
    this.departmentemployeeService.remove(departmentId).subscribe(data =>{this.getDepartmentEmployee();}
    )

  }
  

  ShowModal(id: string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
 

  loadById(id: any){
    return null;
  }


}

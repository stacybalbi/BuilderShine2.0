import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.models';
import { EmployeeService } from 'src/app/Services/employee/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee!: Employee[];

  constructor( 
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getemployee();
  }

  getemployee(){
    this.employeeService.get().subscribe(({data} : any) => {
      this.employee = data
    });
  }

  delete(employeeId: string){
    this.employeeService.remove(employeeId).subscribe(data =>{this.getemployee();}
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

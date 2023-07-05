import { Component, OnInit } from '@angular/core';
import { Offices } from 'src/app/core/models/offices.models';
import { OfficeService } from 'src/app/Services/office/office.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss']
})
export class OfficeListComponent implements OnInit {

  office!: Offices[];

  constructor( 
    private officeService: OfficeService
  ) { }

  ngOnInit(): void {
    this.getoffice();
  }

  getoffice(){
    this.officeService.get().subscribe(({data} : any) => {
      this.office = data
    });
  }

  delete(officeId: string){
    this.officeService.remove(officeId).subscribe(data =>{this.getoffice();}
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

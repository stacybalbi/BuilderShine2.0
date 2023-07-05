import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/core/models/business.models';
import { BusinessService } from 'src/app/Services/business/business.service';
import  Swal from 'sweetalert2'

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {

  business: Business[] = [];

  constructor( 
    private businessService: BusinessService
  ) { }

  ngOnInit(): void {
    this.getBusiness();
  }

  getBusiness(){
    this.businessService.get().subscribe(({data} : any) => {
      this.business = data
    });
  }

  delete(accountId: string){
    this.businessService.remove(accountId).subscribe(data =>{this.getBusiness();})

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

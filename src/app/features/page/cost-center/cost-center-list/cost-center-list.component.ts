import { Component, OnInit } from '@angular/core';
import { CostCenter } from 'src/app/core/models/cost-center.models';
import { CostCenterService } from 'src/app/Services/cost-center/cost-center.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cost-center-list',
  templateUrl: './cost-center-list.component.html',
  styleUrls: ['./cost-center-list.component.scss']
})
export class CostCenterListComponent implements OnInit {

  costcenter: CostCenter[] = [];

  constructor( 
    private costcenterService: CostCenterService
  ) { }

  ngOnInit(): void {
    this.getcostcenter();
  }

  getcostcenter(){
    this.costcenterService.get().subscribe(({data} : any) => {
      this.costcenter = data
    });
  }

  delete(costcenterId: string){
    this.costcenterService.remove(costcenterId).subscribe(data =>{this.getcostcenter();}
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

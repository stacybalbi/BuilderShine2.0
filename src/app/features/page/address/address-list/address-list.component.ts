import { Component, OnInit } from '@angular/core';
import { Adress } from 'src/app/core/models/adress.models';
import { AdressService } from 'src/app/Services/adress/adress.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  Adress!: Adress[];

  constructor( 
    private adressService: AdressService
  ) { }

  ngOnInit(): void {
    this.getadress();
  }

  getadress(){
    this.adressService.get().subscribe(({data} : any) => {
      this.Adress = data
    });
  }

  delete(adressId: string){
    this.adressService.remove(adressId).subscribe(data =>{this.getadress();}
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

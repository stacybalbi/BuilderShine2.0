import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.models';
import { CountryService } from 'src/app/Services/country/country.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  country!: Country[];

  constructor( 
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getcountry();
  }

  getcountry(){
    this.countryService.get().subscribe(({data} : any) => {
      this.country = data
    });
  }

  delete(countryId: string){
    this.countryService.remove(countryId).subscribe(data =>{this.getcountry();}
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

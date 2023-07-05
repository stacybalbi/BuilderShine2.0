
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/core/models/User/userDto.models';
import { UserService } from 'src/app/Services/user/user.service';

import { Location} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public dataform : FormGroup = new FormGroup([]);
  constructor(
    private userservice : UserService,
    private location: Location
  ) { }

  private initializeForm(): void {
    this.dataform = new FormGroup(
      {
        name : new FormControl(''),      
        lastname : new FormControl(''),
        username : new FormControl(''),
        email : new FormControl(''),
        password : new FormControl('')
      }
    ) }

    

  ngOnInit(): void {
    this.initializeForm();
  }


  submit(){
    const createUser : UserDto = { 
      ...this.dataform.value
    } as UserDto;
  
    this.userservice.create(createUser).subscribe(()=>{
      Swal.fire(
        'Account Successfully Created',
        'success'
      )
      this.goBack();
    },()=>{
      alert('error creating user');
    } 
    );
  }
  goBack() {
    this.location.back();
  }

}

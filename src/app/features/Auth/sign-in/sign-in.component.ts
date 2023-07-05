import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.models';
import { UserDto } from 'src/app/core/models/User/userDto.models';
import { AuthService } from 'src/app/Services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form: FormGroup = new FormGroup([]);
  private user!:UserDto;
  responsedata: any;
  visible: boolean = false;
  constructor(
    private _authService: AuthService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    
    
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    )
  }

  submit() {
    const user : UserDto = {
      ...this.form.value
    } as User
    this.visible=true;
    this._authService.create(user).subscribe((data) => {
      this.user = data as any;
      this._authService.setToken(this.user.data.access_token);

      this._route.navigate(['home']);
    }, (error) => {
      console.log(error.error.message)
    })

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
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
      title: 'Signed in successfully'
    })
  }
}
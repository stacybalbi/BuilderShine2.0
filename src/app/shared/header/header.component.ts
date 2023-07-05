import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this._route.navigate(['sign-in']);
    this._authService.deleteToken()
  }
}

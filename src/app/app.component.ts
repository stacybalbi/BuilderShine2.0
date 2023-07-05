import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './Services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BuilderShine2.0';
  visible:boolean=false;

  constructor(private authServicces: AuthService, 
              private router:Router) {}
  

  ngOnInit(): void {
    
  }

  

  get url(){
    return this.router.url;
  }

  get hideNavbar(){
    return !['/sign-in', '/sign-up'].includes(this.url)
  }
}
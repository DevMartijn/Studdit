import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) { }

  ngOnInit() {
    console.log("Check this out: " + this.authService.isLoggedIn);
    this.loggedIn = this.authService.isLoggedIn;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

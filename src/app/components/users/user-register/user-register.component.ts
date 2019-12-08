import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  username = "";
  password = "";
  submitted = false;

  constructor(
    private authenticationService : AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    this.authenticationService.register(this.username,this.password).subscribe(
      result => {
        console.log(result);
      });
  }

}

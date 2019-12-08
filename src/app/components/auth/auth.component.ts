import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username = "";
  password = "";
  submitted = false;

  constructor(
    private authenticationService : AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.username);
    console.log(this.password);

    this.authenticationService.login(this.username,this.password).subscribe(
      result => {
        console.log(result);
        
        if(result.status === true){
            console.log("succes");
            localStorage.setItem('currentUser', result.user);
            this.authenticationService.currentUserSubject = result.user;
            this.router.navigate(['/group/list']);
        }
      });
  }
}

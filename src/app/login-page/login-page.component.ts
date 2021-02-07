import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

import { UserLoginCredentials } from './login.model';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  myForm: FormGroup;
  login: UserLoginCredentials = new UserLoginCredentials();

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private userService: UserService , private router: Router , private route: ActivatedRoute) {}

  
  formInit() {
    this.myForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.formInit();
    if(localStorage.getItem('token') != null){
      this.isLoggedIn = true;

    }
  }
  

  logIn():void {
     console.log(this.myForm.value);
     this.login.username = this.myForm.value['username'];
     this.login.password = this.myForm.value['password'];
     this.userService.login(this.login)
     .subscribe(
       (data: User) => {
         console.log('response recived');
         localStorage.setItem('token', 'Bearer '+ data.authToken);
         this.userService.user = data;
         localStorage.setItem('type', data.role);
         if(data.role == 'user'){
           localStorage.setItem('username', data.username);
         }
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage(); 
        },
    err=>{
      this.errorMessage = "Check your Credentials";
      this.isLoginFailed = true;
    });
  }

  reloadPage() {
      window.location.reload();
  }

}

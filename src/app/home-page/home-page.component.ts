import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../login-page/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private roles: string;
    isLoggedIn = false;
    showAdmin = false;
    username: string;

  constructor(private route:Router,private userService: UserService) { }

  ngOnInit(): void { 
    if(localStorage.getItem('type') !== null){
      this.isLoggedIn =true;
    }
    if(localStorage.getItem('type') === 'admin') {
       this.showAdmin =true;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Loan-Management';

    private roles: string;
    isLoggedIn = false;
    showAdmin = false;
    username: string;
  
  constructor(private router: Router) { }

  ngOnInit() {

    if(localStorage.getItem('type') !== null){
      this.isLoggedIn =true;
    }
    this.username = localStorage.getItem('type');
    if(localStorage.getItem('type') === 'admin') {
      return this.showAdmin =true;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);  
  }
 
}

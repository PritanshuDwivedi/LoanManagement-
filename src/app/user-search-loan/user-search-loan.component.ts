import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loans } from '../loans';

@Component({
  selector: 'app-user-search-loan',
  templateUrl: './user-search-loan.component.html',
  styleUrls: ['./user-search-loan.component.css']
})
export class UserSearchLoanComponent implements OnInit {
 
  isShow:boolean = false;
  fetchId: number;
  loans: any[] = [];

  
  constructor(private loanService: LoanService , private route: ActivatedRoute) { }

  ngOnInit(){}


  searchForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    loanNumber: new FormControl('', Validators.required)
  })

  onSubmit() {
    
    this.fetchId = +this.searchForm.get('loanNumber')?.value;
    this.loanService.getCurrentData(this.fetchId).subscribe(
      data=>{
      this.loans.push(data);
      this.searchForm.reset();
      })
    this.isShow=true;

  }
}

   

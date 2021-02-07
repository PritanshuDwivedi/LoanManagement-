import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loans } from '../loans';

@Component({
  selector: 'app-admin-update-loan',
  templateUrl: './admin-update-loan.component.html',
  styleUrls: ['./admin-update-loan.component.css']
})
export class AdminUpdateLoanComponent implements OnInit {

  constructor(private loanService: LoanService , private route: ActivatedRoute) { }

  ngOnInit(): void { }

  isShow: boolean=false;
  public collection:any = [];
  loans: Loans[] = [];

  searchForm = new FormGroup({
    'fname': new FormControl('',Validators.required),
    'lname': new FormControl('',Validators.required),
    'loanNumber': new FormControl('',Validators.required)
  })
  
fetchId:number;
 
  onUpdate() {
    this.fetchId = +this.searchForm.get('loanNumber')?.value;
    this.loanService.getCurrentData(this.fetchId).subscribe(
      data=>{
      this.loans.push(data);
    1 })
    this.isShow = true;
  }
  
  deleteId:number;

  onDelete() {
    this.deleteId = +this.searchForm.get('loanNumber')?.value;
    this.loanService.deleteLoan(this.deleteId).subscribe(
      data=>{
        this.searchForm.reset({});
        this.loans.pop();
      alert("Details Deleted for User  " );
     
      })
    this.isShow=false;
  }

}

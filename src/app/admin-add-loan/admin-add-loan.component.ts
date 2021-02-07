import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';
import {Observable} from "rxjs";
import { Loans } from '../loans';

@Component({
  selector: 'app-admin-add-loan',
  templateUrl: './admin-add-loan.component.html',
  styleUrls: ['./admin-add-loan.component.css']
})

export class AdminAddLoanComponent implements OnInit {

  loans: Loans[] = [];

  
  addLoan = new FormGroup({
    loanNumber: new FormControl('',Validators.required),
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    propertyAddress: new FormControl('',Validators.required),
    loanType: new FormControl('',Validators.required),
    loanAmount: new FormControl('',Validators.required),
    loanTerm: new FormControl('',Validators.required),
    loanStatus: new FormControl('',Validators.required),
    loanManagementFees: new FormControl('',Validators.required),
    originationDate: new FormControl('',Validators.required),
    lienInfo: new FormControl('',Validators.required),
    legalDocument: new FormControl('',Validators.required),
    loanHistory: new FormControl('',Validators.required)
  })

  constructor(private loanService: LoanService, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  onSubmit(){
    this.loanService.addLoanDetails(this.addLoan.value).subscribe(
      data=>{
      alert("Loan Details Added for Loan Number: " + data.loanNumber);
      });
    this.addLoan.reset({});
  } 

}
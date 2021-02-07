import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';
import { Loans } from '../loans';

@Component({
  selector: 'app-admin-edit-loan',
  templateUrl: './admin-edit-loan.component.html',
  styleUrls: ['./admin-edit-loan.component.css']
})

export class AdminEditLoanComponent implements OnInit {
 
updateEdit = new FormGroup({
    loanNumber: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    propertyAddress: new FormControl('', Validators.required),
    loanType: new FormControl('', Validators.required),
    loanAmount: new FormControl('', Validators.required),
    loanTerm: new FormControl('', Validators.required),
    loanStatus: new FormControl('', Validators.required),
    loanManagementFees: new FormControl('', Validators.required),
    originationDate: new FormControl('', Validators.required),
    lienInfo: new FormControl('', Validators.required),
    legalDocument: new FormControl('', Validators.required),
    loanHistory: new FormControl('', Validators.required)
  })
  


constructor(private loanService: LoanService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id)
    this.loanService.getCurrentData(this.route.snapshot.params.id).subscribe(
      (result)=>{
      this.updateEdit = new FormGroup({
        loanNumber: new FormControl(result['loanNumber']),
        fname: new FormControl(result['fname']),
        lname: new FormControl(result['lname']),
        propertyAddress: new FormControl(result['propertyAddress']),
        loanType: new FormControl(result['loanType']),
        loanAmount: new FormControl(result['loanAmount']),
        loanTerm: new FormControl(result['loanTerm']),
        loanStatus: new FormControl(result['loanStatus']),
        loanManagementFees: new FormControl(result['loanManagementFees']),
        originationDate: new FormControl(result['originationDate' ] ),
        lienInfo: new FormControl(result['lienInfo']),
        legalDocument: new FormControl(result['legalDocument']),
        loanHistory: new FormControl(result['loanHistory'])

      })
  }) 
}

  
onSubmit(){
  this.loanService.updateLoan(this.route.snapshot.params.id,this.updateEdit.value).subscribe(
    (result)=>{
    alert("Loan Details Updated for Loan Number: " + result.loanNumber);
    this.updateEdit.reset({});
    
  });
}
      
}


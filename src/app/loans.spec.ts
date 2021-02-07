import { inject, TestBed } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { LoanService } from "./loan.service";
import { Loans } from "./loans";
  
describe('Loan Service Test Cases',()=>{

    let httpTestingController: HttpTestingController;
    let loanService:LoanService;

    const temploans=
            {
                "loanNumber": 1,
                "fname": "PRITANSHU",
                "lname": "DWIVEDI",
                "propertyAddress": "1/701",
                "loanType": "home",
                "loanAmount": 2345678,
                "loanTerm": 4,
                "loanStatus":"Active",
                "loanManagementFees":3456,
                "originationDate":"23/3/1998",
                "lienInfo":"Yes",
                "legalDocument":"PAN",
                "loanHistory":"Moderate",
                };


    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule]
        });

        loanService= TestBed.inject(LoanService);

        httpTestingController = TestBed.inject(HttpTestingController);
       
    });

   it('should be created',()=>{
       expect(loanService).toBeTruthy();
   });

    it('should get the data by id',()=>{
        let result :Loans;
        loanService.getCurrentData(temploans.loanNumber).subscribe(data=>{
            result=data;
        });
        let req= httpTestingController.expectOne({
            method:"GET"
        });
        req.flush([temploans]);
        expect(result[0]).toEqual(temploans);
      }); 


    it('should call POST method to add loan details',()=>{
        loanService.addLoanDetails(temploans[0]).subscribe();
        let req=httpTestingController.expectOne({
            method:"POST"
        });
        expect(req.request.body).toEqual(temploans[0]);
    });

    it('should call PUT method to update the data',()=>{

        loanService.updateLoan(temploans.loanNumber,temploans[0]).subscribe();
        let req =httpTestingController.expectOne({
            method:"PUT"
        });
        expect(req.request.body).toEqual(temploans[0]);
    });

    it('should call delete loan API', () => {
        loanService.deleteLoan(1).subscribe();
        let req = httpTestingController.expectOne({
          method: "DELETE"
        });
    
        expect(req).toBeDefined();
      });


});
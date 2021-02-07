import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {empty, Observable} from 'rxjs';
import { routes } from '../app-routing.module';
import { AppModule } from '../app.module';
import { FooterComponent } from '../footer/footer.component';
import { LoanService } from '../loan.service';

import { AdminAddLoanComponent } from './admin-add-loan.component';

describe('AdminAddLoanComponent', () => {
  let component: AdminAddLoanComponent;
  let fixture: ComponentFixture<AdminAddLoanComponent>;
  let debugElement: DebugElement;
  let loanService:LoanService; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ AdminAddLoanComponent, FooterComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddLoanComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
    loanService=TestBed.inject(LoanService);

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add data',()=>{
    const spy=spyOn(loanService,'addLoanDetails').and.returnValue(empty());
    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('submit',null);
    expect(spy).toHaveBeenCalled();
  });

  it('should show alert',()=>{
    component.onSubmit();
    expect(alert).toBeTruthy();
  });


  it('fName field not valid',()=>{
    let fname = component.addLoan.controls['fname'];
    expect(fname.valid).toBeFalsy();

    let errors={};
    errors=fname.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('lName field not valid',()=>{
    let lname = component.addLoan.controls['lname'];
    expect(lname.valid).toBeFalsy();

    let errors={};
    errors=lname.errors || {};
    expect(errors['required']).toBeTruthy();
  });


  it('loanNumber field not valid',()=>{
    let loanNumber = component.addLoan.controls['loanNumber'];
    expect(loanNumber.valid).toBeFalsy();

    let errors={};
    errors=loanNumber.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('propertyAddress field not valid',()=>{
    let propertyAddress = component.addLoan.controls['propertyAddress'];
    expect(propertyAddress.valid).toBeFalsy();

    let errors={};
    errors=propertyAddress.errors || {};
    expect(errors['required']).toBeTruthy();
  });


  it('loanType field not valid',()=>{
    let loanType = component.addLoan.controls['loanType'];
    expect(loanType.valid).toBeFalsy();

    let errors={};
    errors=loanType.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('loanAmount field not valid',()=>{
    let loanAmount = component.addLoan.controls['loanAmount'];
    expect(loanAmount.valid).toBeFalsy();

    let errors={};
    errors=loanAmount.errors || {};
    expect(errors['required']).toBeTruthy();
  });


  it('loanTerm field not valid',()=>{
    let loanTerm = component.addLoan.controls['loanTerm'];
    expect(loanTerm.valid).toBeFalsy();

    let errors={};
    errors=loanTerm.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('loanStatus field not valid',()=>{
    let loanStatus = component.addLoan.controls['loanStatus'];
    expect(loanStatus.valid).toBeFalsy();

    let errors={};
    errors=loanStatus.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('loanManagementFees field not valid',()=>{
    let loanManagementFees = component.addLoan.controls['loanManagementFees'];
    expect(loanManagementFees.valid).toBeFalsy();

    let errors={};
    errors=loanManagementFees.errors || {};
    expect(errors['required']).toBeTruthy();
  }); 
  
  it('originationDate field not valid',()=>{
    let originationDate = component.addLoan.controls['originationDate'];
    expect(originationDate.valid).toBeFalsy();

    let errors={};
    errors=originationDate.errors || {};
    expect(errors['required']).toBeTruthy();
  }); 
  
  it('legalDocument field not valid',()=>{
    let legalDocument = component.addLoan.controls['legalDocument'];
    expect(legalDocument.valid).toBeFalsy();

    let errors={};
    errors=legalDocument.errors || {};
    expect(errors['required']).toBeTruthy();
  }); 
  
  it('lienInfo field not valid',()=>{
    let lienInfo = component.addLoan.controls['lienInfo'];
    expect(lienInfo.valid).toBeFalsy();

    let errors={};
    errors=lienInfo.errors || {};
    expect(errors['required']).toBeTruthy();
  }); 
  
  
 /*  it('loanHistory field not valid',()=>{
    let loanHistory = component.addLoan.controls['loanHistory'];
    expect(loanHistory.valid).toBeFalsy();

    let errors={};
    errors=loanHistory.errors || {};
    expect(errors['required']).toBeTruthy();
  }); */

});

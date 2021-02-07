import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { empty } from 'rxjs';
import { AppModule } from '../app.module';
import { FooterComponent } from '../footer/footer.component';
import { LoanService } from '../loan.service';
import { Loans } from '../loans';

import { UserSearchLoanComponent } from './user-search-loan.component';

describe('UserSearchLoanComponent', () => {
  
  let component: UserSearchLoanComponent;
  let fixture: ComponentFixture<UserSearchLoanComponent>;
  let debugElement: DebugElement;
  let service:LoanService;
  let loans:Loans;

 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,AppModule],

      declarations: [ UserSearchLoanComponent , FooterComponent]
    })
    .compileComponents();
    service=TestBed.inject(LoanService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchLoanComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Submit Button works',() =>{
    component.isShow=true;
    const spy =spyOn(service,'getCurrentData').and.returnValue(empty());
    const form =debugElement.query(By.css('form'));
    form.triggerEventHandler('submit',null);
    expect(spy).toHaveBeenCalled();
  });

  it('H1 test',()=>{
    expect(debugElement.nativeElement.querySelector('h1').textContent).toContain('Loan Details');
  });
  it('H3 test',()=>{
    expect(debugElement.nativeElement.querySelector('h3').textContent).toContain('Enter your details:');
  });

  it('fName field not valid',()=>{
    let fname = component.searchForm.controls['fname'];
    expect(fname.valid).toBeFalsy();

    let errors={};
    errors=fname.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('lname field not valid',()=>{
    let lname = component.searchForm.controls['lname'];
    expect(lname.valid).toBeFalsy();

    let errors={};
    errors=lname.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('loanNumber field not valid',()=>{
    let loanNumber = component.searchForm.controls['loanNumber'];
    expect(loanNumber.valid).toBeFalsy();

    let errors={};
    errors=loanNumber.errors || {};
    expect(errors['required']).toBeTruthy();
  });

   it('should only be no table initially',()=>{
    const tableList = debugElement.queryAll(By.css('table'));
    expect(tableList.length).toBe(0);
  }); 

  it('should only be one table after',((done)=>{
    component.isShow=true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const tableList = debugElement.queryAll(By.css('table'));
      expect(tableList.length).toBe(1);
      done();
    });
  })
  );
  
  it('should test the directive for its change to show div',()=>{
    component.isShow=true;
    fixture.detectChanges();
    expect(debugElement.query(By.css('.loan')).nativeElement).toBeTruthy();
  });

});

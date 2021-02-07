import { DebugElement, NgZone } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Loans } from '../loans';
import { Location } from '@angular/common';


import { AdminUpdateLoanComponent } from './admin-update-loan.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { routes } from '../app-routing.module';
import { LoanService } from '../loan.service';
import { empty } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

describe('AdminUpdateLoanComponent', () => {
  let component: AdminUpdateLoanComponent;
  let fixture: ComponentFixture<AdminUpdateLoanComponent>;

  let debugElement: DebugElement;
  let router:Router;
  let location: Location;
  let service:LoanService;
  let loans:Loans;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ AdminUpdateLoanComponent, FooterComponent ]
    })
    .compileComponents();

    router =TestBed.inject(Router) as Router;
    location =TestBed.inject(Location) as Location;
    service=TestBed.inject(LoanService);
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateLoanComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();

  });
  

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fName field not valid',()=>{
    let fname = component.searchForm.controls['fname'];
    expect(fname.valid).toBeFalsy();

    let errors={};
    errors=fname.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('lName field not valid',()=>{
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

  
  it('Submit Button works',() =>{

    component.isShow=true;
    const spy =spyOn(service,'getCurrentData').and.returnValue(empty());
    const form =debugElement.query(By.css('form'));
    form.triggerEventHandler('submit',null);
    expect(spy).toHaveBeenCalled();
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

  it('should be isShow false',(()=>{
    component.onDelete();
    expect(component.isShow).toEqual(false);
  }));
  

  it('should be isShow false',(()=>{
    component.onUpdate();
    expect(component.isShow).toEqual(true);
  }));
  
it('Modify Button should work',(done)=>{
    
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    fixture.detectChanges();
    fakeAsync(()=>{
    debugElement.query(By.css('.admin')).nativeElement.click();
    expect(location.path()).toBe('/editLoan/1');
    })
    done();
    }) 
  }); 

  it('should test the directive for its change to div',()=>{
    component.isShow=true;
    fixture.detectChanges();
    expect(debugElement.query(By.css('.loan')).nativeElement).toBeTruthy();
  });

  it('delete button should work',()=>{

    component.isShow=true;
    fixture.detectChanges();
    const spy =spyOn(service,'deleteLoan').and.returnValue(empty());
    component.onDelete();
    expect(spy).toHaveBeenCalled();
  });
  
  it('should show alert',()=>{
      component.onDelete();
      expect(alert).toBeTruthy();
  });
});

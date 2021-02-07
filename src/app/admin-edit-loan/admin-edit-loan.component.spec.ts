import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { empty } from 'rxjs';
import { routes } from '../app-routing.module';
import { AppModule } from '../app.module';
import { LoanService } from '../loan.service';

import { AdminEditLoanComponent } from './admin-edit-loan.component';

describe('AdminEditLoanComponent', () => {
  let component: AdminEditLoanComponent;
  let fixture: ComponentFixture<AdminEditLoanComponent>;
  let debugElement: DebugElement;
  let service:LoanService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ AdminEditLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditLoanComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
    service=TestBed.inject(LoanService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the data',()=>{
    const spy =spyOn(service,'updateLoan').and.returnValue(empty());
    const form =debugElement.query(By.css('form'));
    form.triggerEventHandler('submit',null);
    expect(spy).toHaveBeenCalled();

  });

});

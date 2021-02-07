import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { Location } from '@angular/common';
import { AppModule } from '../app.module';


import { LoginPageComponent } from './login-page.component';
import { By } from '@angular/platform-browser';


describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  let router:Router;
  let location: Location;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();

    router =TestBed.get(Router) as Router;
    location =TestBed.get(Location) as Location;
  });
  beforeEach(() => {
    
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
  });

  it('H1 test',()=>{
    expect(debugElement.nativeElement.querySelector('h1').textContent).toContain('Loan Management');
  });

  it('H2 test',()=>{
    expect(debugElement.nativeElement.querySelector('h2').textContent).toContain('Login or SignUp');
  });
  

  it('Username field not valid',()=>{
    let username = component.myForm.controls['username'];
    expect(username.valid).toBeFalsy();

    let errors={};
    errors=username.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should only be 1 ul ',()=>{
      const ulList = debugElement.queryAll(By.css('ul'));
      expect(ulList.length).toBe(1);
  });

  it('Password field not valid',()=>{
    let password = component.myForm.controls['password'];
    expect(password.valid).toBeFalsy();

    let errors={};
    errors=password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('User should able to login', fakeAsync(() => {
    component.myForm.controls['username'].setValue("admin");
    component.myForm.controls['password'].setValue("admin");
    component.logIn();
    tick();
    expect(location.path()).toBe('/login');
  })
  );
  
  it('should be min one button on the page',()=>{
     let linkdes= debugElement.queryAll(By.css('button'));
      expect(linkdes.length>=1).toBeTruthy();
  });

  it('should be min one button on the page',()=>{
    let linkdes= debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkdes[0].nativeElement;

    expect(nativeButton.textContent).toBe('Login');
 });



  it('should create', () => {
    expect(component).toBeTruthy();
  })


});

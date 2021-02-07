import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { Location } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { DebugElement } from '@angular/core';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  let router:Router;
  let location: Location;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ HomePageComponent,FooterComponent ]
    })
    .compileComponents();

    router =TestBed.get(Router) as Router;
    location =TestBed.get(Location) as Location;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement=fixture.debugElement;
  });

  it('should take to User-Search-Loan Page',fakeAsync(()=>{

    debugElement.query(By.css('.user')).nativeElement.click();
    tick();
    expect(location.path()).toBe('/searchLoan');
    
  })
  );

  it('Redirect to Admin-Add-Loan', fakeAsync(()=>{
    debugElement.query(By.css('.admin-add-loan')).nativeElement.click();
        tick();
        expect(location.path()).toBe('/addLoan');
  })
  );
  
  it('Redirect to Admin-Update-Loan', fakeAsync(()=>{
    debugElement.query(By.css('.admin-update-loan')).nativeElement.click();
        tick();
        expect(location.path()).toBe('/updateLoan');
  })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  })
});

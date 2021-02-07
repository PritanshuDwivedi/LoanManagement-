import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Router } from "@angular/router"
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';


import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;


  let router:Router;
  let location: Location;
  let debugElement: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports:[AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ FooterComponent ,AppComponent]
    })
    .compileComponents();

    router =TestBed.get(Router) as Router;
    location =TestBed.get(Location) as Location;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
  });

  it('Redirect to Login Page', fakeAsync(()=>{
    debugElement.query(By.css('a')).nativeElement.click();
        tick();
        expect(location.path()).toBe('/login');
  })
  );

  
  it('should create', () => {
    expect(component).toBeTruthy();
  })

  
});

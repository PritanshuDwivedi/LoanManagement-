import { DebugElement } from '@angular/core';
import { Router } from "@angular/router"
import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppModule } from '../app.module';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let router:Router;
  let location: Location;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();

    router =TestBed.get(Router) as Router;
    location =TestBed.get(Location) as Location;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;

    fixture.detectChanges();
   
  });

  it('H1 test',()=>{
    expect(debugElement.nativeElement.querySelector('h1').textContent).toContain('Hello Buddy!');
  });

  it('Redirect to Login Page', fakeAsync(()=>{
    debugElement.query(By.css('.btn')).nativeElement.click();
        tick();
        expect(location.path()).toBe('/login');
  })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

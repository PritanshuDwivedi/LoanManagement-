import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Loan-Management'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Loan-Management');
  });
});
/* 
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let router:Router;
  let location: Location;
  let debugElement: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ HeaderComponent , AppComponent]
    }) .compileComponents();

    router =TestBed.get(Router) as Router;
    location =TestBed.get(Location) as Location;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
  });


  it('Redirect to home', fakeAsync(()=>{
      debugElement.query(By.css('.navbar-brand')).nativeElement.click();
          tick();
          expect(location.path()).toBe('/home');
  })
  );

  it('Redirect to User-Search-Loan', fakeAsync(()=>{
    debugElement.query(By.css('.user')).nativeElement.click();
        tick();
        expect(location.path()).toBe('/user-search-loan');
})
);

it('Redirect to Admin-Add-Loan', fakeAsync(()=>{
  debugElement.query(By.css('.admin-add')).nativeElement.click();
      tick();
      expect(location.path()).toBe('/admin-add-loan');
})
);

it('Redirect to Admin-Update-Loan', fakeAsync(()=>{
  debugElement.query(By.css('.admin-update')).nativeElement.click();
      tick();
      expect(location.path()).toBe('/admin-update-loan');
})
);

it('Redirect to Login Page', fakeAsync(()=>{
  debugElement.query(By.css('.logout')).nativeElement.click();
      tick();
      expect(location.path()).toBe('/logout');
})
);

it('should only be 2 ul after',((done)=>{
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    fixture.detectChanges();
    const ulList = debugElement.queryAll(By.css('ul'));
    expect(ulList.length).toBe(2);
    done();
  });
})
);

it('should only be 4 li after',((done)=>{
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    fixture.detectChanges();
    const  liList = debugElement.queryAll(By.css('li'));
    expect(liList.length).toBe(4);
    done();
  });
})
);

it('should create', () => {
  expect(component).toBeTruthy();
})

  
});
 */
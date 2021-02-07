import { Router } from "@angular/router"
import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "./app.module";
import {routes} from './app-routing.module';
import { from } from "rxjs";



describe('Routing Test Cases',()=>{
    let router:Router;
    let location: Location;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[AppModule, RouterTestingModule.withRoutes(routes)]
        });
        router =TestBed.get(Router) as Router;
        location =TestBed.get(Location) as Location;
     });

    it('redirect to login page',
        fakeAsync(()=>{
            router.navigate(['']);
            tick();
            expect(location.path()).toBe('/login');
        })
    );

     it('go to user-search-loan page when invoking /user-search-loan',
            fakeAsync(()=>{
                router.navigate(['/searchLoan']);
                tick();
                expect(location.path()).toBe('/searchLoan');
            })
     
    );


     it('go to admin-update-loan page when invoking /admin-update-loan',
            fakeAsync(()=>{
                router.navigate(['/updateLoan']);
                tick();
                expect(location.path()).toBe('/updateLoan');
            })
     
     );
     
    it('go to admin-add-loan page when invoking /admin-add-loan',
     fakeAsync(()=>{
         router.navigate(['/addLoan']);
         tick();
         expect(location.path()).toBe('/addLoan');
     })

    );

    it('go to admin-edit-loan page when invoking /admin-edit-loan/:id',
        fakeAsync(()=>{
            let id=4;
            router.navigate(['editLoan/4']);
            tick();
            expect(location.path()).toBe('/editLoan/4');
        })

    );

    it('Redirect to Login page when invoking /logout',
        fakeAsync(()=>{
            router.navigate(['/logout']);
            tick();
            expect(location.path()).toBe('/logout');
        })

    );

    it('go to Login page when invoking /login',
        fakeAsync(()=>{
            router.navigate(['/login']);
            tick();
            expect(location.path()).toBe('/login');
        })

    );

    it('go to page-not-found when invoking /error-page',
        fakeAsync(()=>{
            router.navigate(['/page-not-found']);
            tick();
            expect(location.path()).toBe('/page-not-found');
        })

    );
});
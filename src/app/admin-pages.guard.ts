import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './login-page/user.service';

@Injectable({
  providedIn: 'root'
})

export class AdminPagesGuard implements CanActivate {


  private roles: string;
    isLoggedIn = false;
    showAdmin = false;
    showUser = false;
    username: string;

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(localStorage.getItem('type') === 'admin') {
        return true;
      }
      localStorage.clear();
      this.router.navigate(['login']);
      return false;
  }
  
}

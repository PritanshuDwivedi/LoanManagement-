import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserPageGuard implements CanActivate {
  
  private roles: string;
  isLoggedIn = false;
  showUser = false;
  username: string;

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    
      if(localStorage.getItem('type') === 'user') {
        return true;
      }
      localStorage.clear();
      this.router.navigate(['login']);
      return false;
  }
  
}

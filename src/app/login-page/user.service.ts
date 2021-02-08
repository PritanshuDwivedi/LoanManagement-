import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginCredentials } from './login.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User();
  readonly url: string = 'https://authentication-microservice-auth.azurewebsites.net/authapp'

  constructor(private http: HttpClient) { }

  login(user: UserLoginCredentials): Observable<User>{
    //console.log('login method called - ');
    //console.log(user);
    return this.http.post<any>(this.url+'/login' , user);
  }  

}

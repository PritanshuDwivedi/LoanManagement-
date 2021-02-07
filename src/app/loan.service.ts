import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Loans } from './loans';

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  url='http://localhost:8083/loan';
  
  constructor(private _http:HttpClient) { }

  addLoanDetails(loan:Loans): Observable<Loans>{
    let authHeader = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    return this._http.post<Loans>(`${this.url}/new`, loan, {headers: authHeader});
  }

  deleteLoan(id:number): Observable<Loans> {
    let authHeader = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
     return this._http.delete<Loans>(`${this.url}/delete/${id}`,  {headers:authHeader})
  }
  
  getCurrentData(id:number): Observable<Loans>{
    let authHeader = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    return this._http.get<Loans>(`${this.url}/get/${id}`,  {headers:authHeader})
  }

  updateLoan(id,loan:Loans): Observable<Loans>{
    let authHeader = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    return this._http.put<Loans>(`${this.url}/edit/${id}`, loan, {headers:authHeader})
  }

}
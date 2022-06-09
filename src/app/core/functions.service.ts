import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './models/auth.model';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  authUrl = 'http://localhost:8000/api/';
  userId!: string;
  token = '';
  item = '';
  constructor(private http: HttpClient, private auth: AuthService) {
    const item = localStorage.getItem('currentUser');
    this.userId = auth.getUserId();
    this.token = auth.getToken;
  }
  getAllAccounts() {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    const userId = parsedUser.user._id;
    const token = parsedUser.token;
    console.log(userId)
    // if (this.userId && this.token) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.get(this.authUrl + 'accounts/getAllAccounts/' + userId, { headers: header });
  }
  addAccount(account: any) {
    console.log(account);
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    const userId = parsedUser.user._id;
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.post(this.authUrl + 'accounts/addAccount', JSON.stringify(account), { headers: header });
  }
  updateAccount = (account: any, id: any) => {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    const userId = parsedUser.user._id;
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.post(this.authUrl + 'accounts/updateAccount/' + id, JSON.stringify(account), { headers: header })
  }
  getAllStrategies = () => {
    // if(this.token){
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + this.token
    );
    console.log(this.token);
    return this.http.get(this.authUrl + 'strategies/getAllStrategies/' + this.userId, { headers: header });
    // }
    // else{
    //   return {
    //     error: "You are not authenticated"
    // };
    // }
  }
  addStrategy = (strategy: any) => {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.post(this.authUrl + 'strategies/addStrategy', JSON.stringify(strategy), { headers: header });
  }
  updateStrategy = (strategy: any, id: any) => {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item);
    const userId = parsedUser.user._id;
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + this.token
    );
    return this.http.post(this.authUrl + 'strategies/updateStrategy/' + id, JSON.stringify(strategy), { headers: header });
  }
  deleteStrategy = (id: any) => {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item);
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.delete(this.authUrl + 'strategies/deleteStrategy/' + id, { headers: header })
  }

  toggleStrategy = (id: any) => {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item);
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.post(this.authUrl + 'strategies/toggleStrategy/' + id, { headers: header });
  }

  getPositions = (id: any) => {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    const userId = parsedUser.user._id;
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.get(this.authUrl + 'accounts/getPositions/' + id, { headers: header })
  }
  getAllInstruments = () => {
    return this.http.get(this.authUrl + 'strategies/getAllInstruments')
  }
  getAllFuturesExpiry = () => {
    return this.http.get(this.authUrl + 'strategies/getAllFuturesExpiry')
  }
  getAllFuturesTokens = () => {
    return this.http.get(this.authUrl + 'strategies/getAllFuturesTokens')
  }
  getAllFutures = () => {
    return this.http.get(this.authUrl + 'strategies/getAllFutures')
  }
  getAllOptions = () => {

  }
  getAllTrades = () => {
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    const userId = parsedUser.user._id;
    const token = parsedUser.token;
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + token
    );
    return this.http.get(this.authUrl + '/trades/getAllTrades/' + userId, { headers: header })
  }



}

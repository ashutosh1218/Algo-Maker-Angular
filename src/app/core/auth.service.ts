import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/auth.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public success=false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private userId!:string;
  token='';

  authUrl='http://localhost:8000/api/';

  constructor(private http: HttpClient) {
    const item=localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(item&&JSON.parse(item));
        this.currentUser = this.currentUserSubject.asObservable();
  }
  public getUserId()
  {
    return this.userId;
  }
  public get getToken(){
    return this.token;
  }
  public get currentUserValue(){
    // return this.success;
    return this.currentUserSubject.value;
  }
  login(email: string, password: string) {
    return this.http.post<any>(this.authUrl+'signin', { email, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          
          this.userId=user.user._id;
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(user.token));
          this.currentUserSubject.next(user);
          this.success=true;
          const token=localStorage.getItem('token');
          this.token=token?token:'';
          console.log(this.userId);
        }
        return user;
      }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');

    this.currentUserSubject.next(null!);
  }
  register(name:string, email:string, password:string){
    return this.http.post(this.authUrl+'signup', {name, email, password})
  }
}

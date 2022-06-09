import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  item='';
  name='';
  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getUserName();
  }
  getUserName(){
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    this.name = parsedUser.user.name;
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}

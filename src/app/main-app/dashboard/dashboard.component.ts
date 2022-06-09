import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name='';
  item='';
  statData=null as any;
  
  constructor() { 
    this.getUserName();
    this.setStats();
  }

  ngOnInit(): void {
  }
  getUserName(){
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    this.name = parsedUser.user.name;
  }
  setStats(){
    const statData=[
      {
        title:"Orders",
        value:123,
        icon:'bx-copy-alt'
      },
      {
        title:"Revenue",
        value:123,
        icon:'bx-archive-in'
      },
      {
        title:"Avg price",
        value:123,
        icon:'bx-purchase-tag-alt'
      }
    ];
    this.statData=statData;
  }

}

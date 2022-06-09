import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FunctionsService } from 'src/app/core/functions.service';
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  displayedColumns: string[] = ['sybmol', 'productType', 'qty', 'pnl'];
  arr=null as any;
  positions=null as any;
  constructor(private func:FunctionsService) { this.getPositionsArray()}

  ngOnInit(): void {
  }
  getPositionsArray(){
    this.func.getAllAccounts()
    .subscribe(data=> {
      this.arr=data;
      this.func.getPositions(this.arr[0]._id)
      .subscribe({
        next:(res)=>{
          this.positions=res;
          
        },
        error:(err)=>console.log(err)})
    }, err=>console.log(err))  
  
  }
  

}
export interface PeriodicElement {
  sybmol: string;
  productType: string;
  qty: number;
  pnl: string;
}

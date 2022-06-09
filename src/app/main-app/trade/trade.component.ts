import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/core/functions.service';
@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
  trades=null as any;
  err='';
  constructor(private func:FunctionsService) {
    this.getTradesArray()
   }

  ngOnInit(): void {
  }
  getTradesArray(){
    this.func.getAllTrades()
    .subscribe(data=>this.trades=data, err=>{
      this.err=err;
    console.log(err)})
  }
}

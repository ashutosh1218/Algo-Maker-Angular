import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/core/functions.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
  strategies = null as any;
  closeResult = '';
  constructor(private func: FunctionsService, private modalService: NgbModal) {
    this.getStrategiesArray();
  }

  ngOnInit(): void {
  }
  getStrategiesArray() {
    this.func.getAllStrategies()
      .subscribe(data => this.strategies = data,
        (err) => {
          console.log(err);
        })

  }
  onSubmit(f:NgForm){
       let name=f.value.name;
       let entryTime=f.value.entryTime;
       let exitTime=f.value.exitTime;
       let direction=f.value.direction;
       let timeFrame=f.value.timeFrame;
       let orderType=f.value.orderType;
       let quantity=f.value.quantity;
       let stopLoss=f.value.stopLoss;
       let target=f.value.target;
       let instrument1=f.value.instrument1;
       let instrument2=f.value.instrument2;
       let indicator1=f.value.indicator1;
       let period1=f.value.period1;
       let multiplier1=f.value.multiplier1;
       let candleParam1=f.value.candleParam1;
       let indicator2=f.value.indicator2;
       let period2=f.value.period2;
       let multiplier2=f.value.multiplier2;
       let candleParam2=f.value.candleParam2;
       let condition=f.value.condition;
       let targetunit=f.value.targetunit;
       let stopLossunit=f.value.stopLossunit;
       let active=f.value.active;

       let values={
        name: name,
        entryTime: entryTime,
        exitTime: exitTime,
        direction: direction,
        timeFrame: timeFrame,
        orderType: orderType,
        quantity: quantity,
        stopLoss: stopLoss,
        target: target,
        indicator1: indicator1,
        period1: period1,
        multiplier1: multiplier1,
        candleParam1: candleParam1,
        indicator2: indicator2,
        period2: period2,
        multiplier2: multiplier2,
        candleParam2: candleParam2,
        stopLossunit: stopLossunit,
        targetunit: targetunit,
        condition: condition,
        active: active,
        instrument1: instrument1,
        instrument2: instrument2,

    }
    this.func.addStrategy(values).
    subscribe(data=>console.log(data));
  }

  open(content:any) {
    this.modalService.open(content, {size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

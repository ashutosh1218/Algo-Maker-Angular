import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/core/functions.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts = null as any;
  closeResult = '';
  item='';
  userId='';
  constructor(private func: FunctionsService, private modalService: NgbModal) {
    this.getAccountsArray()
  }

  ngOnInit(): void {

  }
  getAccountsArray() {
    this.func.getAllAccounts()
      .subscribe(data => this.accounts = data,
        err => console.log(err))
  }
  onSubmit(f: NgForm) {
    console.log(f.value.name, f.value.userID, f.value.broker);
    let userID = f.value.userID
    let name = f.value.name
    let broker = f.value.broker
    let password = f.value.password
    let pin = f.value.pin

    let apiKey = f.value.apiKey
    let secret = f.value.secret
    let totp_secret = f.value.totp_secret||''
    let auth_type = f.value.auth_type
    // let input='';
    // input=auth_type==='pin'?pin:totp_secret;
    let values={
      userID:userID,
      name:name,
      broker:broker,
      password:password,
      pin:pin,
      apiKey:apiKey,
      secret:secret,
      totp_secret:totp_secret,
      auth_type:auth_type

    }
    const val = localStorage.getItem('currentUser')
    this.item = val ? val : '';
    const parsedUser = JSON.parse(this.item)
    this.userId = parsedUser.user._id;
    this.func.addAccount(values)
    .subscribe(data=>console.log(data));

  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
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

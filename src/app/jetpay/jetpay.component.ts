import { Component } from '@angular/core';
import { AuthService } from '../shared';

@Component({
  selector: 'app-jetpay',
  templateUrl: './jetpay.component.html',
  styleUrls: ['./jetpay.component.css']
})
export class JetpayComponent {
  tid = '';
  amount = '';
  token = '';
  orderNumber = '';
  hash: string = null;
  constructor(
    private authService: AuthService
  ) { }

  generateHash() {
    this.hash = this.authService.hashForJetpay(this.tid, this.amount, this.token, this.orderNumber)
  }

}

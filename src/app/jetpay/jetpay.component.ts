import { Component } from '@angular/core';
import { CryptoService } from '../shared';

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
    private crypto: CryptoService
  ) { }

  generateHash() {
    this.hash = this.crypto.hashForJetpay(this.tid, this.amount, this.token, this.orderNumber)
  }

}

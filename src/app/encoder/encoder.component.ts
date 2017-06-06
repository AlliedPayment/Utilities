import { Component, OnInit } from '@angular/core';
import { CryptoService } from "../shared";

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})
export class EncoderComponent implements OnInit {
  result: string;
  api: string = 'https://api.demo.alliedpayment.com';
  domain: string = 'ALLIED';
  routingNumber: string = '074903719';
  approvedUrl: string = 'https://billpay.demo.alliedpayment.com/PortalPay/app/approved.html';
  declinedUrl: string = 'https://billpay.demo.alliedpayment.com/PortalPay/app/declined.html';
  isFundingAccount: boolean = false;
  customerName: string = 'Test User';
  address: string = '3201 Stelhorn Rd';
  city: string = 'Fort Wayne';
  state: string = 'IN';
  zip: string = '46815';
  phone: string = '260-399-7400';
  email: string = 'test.user@alliedpayment.com';
  loanNumber: string = '1234567890';
  loanAmount: string = '1.23';
  loanMemo: string = 'hello memo';
  bankAccount: string = '9876543210';
  bankRouting: string = '074000010';
  bankName: string = 'Fake Chase';
  accountType: string = 'Checking';

  constructor(
    private crypto: CryptoService
  ) { }

  ngOnInit() {
  }

  encode() {
    const data = this.getParams();
    const base64 = this.crypto.base64(data);
    this.result = `?data=${base64}`;
  }

  getParams(): string {
    return `?api=${this.api}&dmn=${this.domain}&rtng=${this.routingNumber}&apprvd=${this.approvedUrl}&dclnd=${this.declinedUrl}&isFund=${this.isFundingAccount}&cstNm=${this.customerName}&cstAddr=${this.address}&cstCty=${this.city}&cstSt=${this.state}&cstZp=${this.zip}&cstPhn=${this.phone}&cstEml=${this.email}&lnNm=${this.loanNumber}&lnAm=${this.loanAmount}&memo=${this.loanMemo}&bnkAcnt=${this.bankAccount}&bnkRt=${this.bankRouting}&bnkNm=${this.bankName}&acntTp=${this.accountType}`;
  }
}

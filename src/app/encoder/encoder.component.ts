import { Component } from '@angular/core';
import { CryptoService } from "../shared";

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})
export class EncoderComponent {
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

  encode() {
    const data = this.getParams();
    const base64 = this.crypto.base64(data);
    this.result = `?data=${base64}`;
  }

  getParams(): string {
    let query = `?`;
    this.addParam(query, 'api', this.api);
    this.addParam(query, 'dmn', this.domain);
    this.addParam(query, 'rtng', this.routingNumber);
    this.addParam(query, 'apprvd', this.approvedUrl);
    this.addParam(query, 'dclnd', this.declinedUrl);
    this.addParam(query, 'isFund', this.isFundingAccount);
    this.addParam(query, 'cstNm', this.customerName);
    this.addParam(query, 'cstAddr', this.address);
    this.addParam(query, 'cstCty', this.city);
    this.addParam(query, 'cstSt', this.city);
    this.addParam(query, 'cstZp', this.zip);
    this.addParam(query, 'cstPhn', this.phone);
    this.addParam(query, 'cstEml', this.email);
    this.addParam(query, 'lnNm', this.loanNumber);
    this.addParam(query, 'lnAm', this.loanAmount);
    this.addParam(query, 'memo', this.loanMemo);
    this.addParam(query, 'bnkAcnt', this.bankAccount);
    this.addParam(query, 'bnkRt', this.bankRouting);
    this.addParam(query, 'bnkNm', this.bankName);
    this.addParam(query, 'acntTp', this.accountType);
    return query;
  }

  addParam(query, name, value) {
    const encoded = encodeURIComponent(value);
    return `${query}&${name}=${encoded}`;
  }
}

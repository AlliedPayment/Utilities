import { Component } from '@angular/core';
import { CryptoService } from '../shared';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})
export class EncoderComponent {
  result: string;
  id: string;
  api: string = 'https://api.demo.alliedpayment.com';
  domain: string = 'ALLIED';
  routingNumber: string = '074903719';
  approvedUrl: string = `https://${this
    .domain}.demo.alliedpayment.com/PortalPay/app/approved.html`;
  declinedUrl: string = `https://${this
    .domain}.demo.alliedpayment.com/PortalPay/app/declined.html`;
  isFundingAccount: boolean = false;
  customerName: string = 'Test User';
  address: string = '3201 Stelhorn Rd';
  city: string = 'Fort Wayne';
  state: string = 'IN';
  zip: string = '46815';
  phone: string = '2603997400';
  email: string = 'test.user@alliedpayment.com';
  loanNumber: string = '1234567890';
  loanAmount: string = '1.23';
  loanMemo: string = 'hello memo';
  bankAccount: string = '9876543210';
  bankRouting: string = '074000010';
  bankName: string = '';
  accountType: string = 'Checking';

  constructor(private crypto: CryptoService) {}

  encode() {
    const data = this.getParams();
    const base64 = this.crypto.base64(data);
    this.result = `?data=${base64}`;
  }

  getParams(): string {
    var query = `?`;
    query = this.addParam(query, 'id', this.id, true);
    query = this.addParam(query, 'api', this.api);
    query = this.addParam(query, 'dmn', this.domain);
    query = this.addParam(query, 'rtng', this.routingNumber);
    query = this.addParam(query, 'apprvd', this.approvedUrl);
    query = this.addParam(query, 'dclnd', this.declinedUrl);
    query = this.addParam(query, 'isFund', this.isFundingAccount);
    query = this.addParam(query, 'cstNm', this.customerName);
    query = this.addParam(query, 'cstAddr', this.address);
    query = this.addParam(query, 'cstCty', this.city);
    query = this.addParam(query, 'cstSt', this.state);
    query = this.addParam(query, 'cstZp', this.zip);
    query = this.addParam(query, 'cstPhn', this.phone);
    query = this.addParam(query, 'cstEml', this.email);
    query = this.addParam(query, 'lnNm', this.loanNumber);
    query = this.addParam(query, 'lnAm', this.loanAmount);
    query = this.addParam(query, 'memo', this.loanMemo);
    query = this.addParam(query, 'bnkAcnt', this.bankAccount);
    query = this.addParam(query, 'bnkRt', this.bankRouting);
    query = this.addParam(query, 'bnkNm', this.bankName);
    query = this.addParam(query, 'acntTp', this.accountType);
    return query;
  }

  addParam(query, name, value, isFirst?: boolean) {
    const encoded = encodeURIComponent(value);
    return isFirst
      ? `${query}${name}=${encoded}`
      : `${query}&${name}=${encoded}`;
  }

  changeDomain(domain: string) {
    this.domain = domain;
    this.approvedUrl = `https://${this
      .domain}.demo.alliedpayment.com/PortalPay/app/approved.html`;
    this.declinedUrl = `https://${this
      .domain}.demo.alliedpayment.com/PortalPay/app/declined.html`;
  }
}

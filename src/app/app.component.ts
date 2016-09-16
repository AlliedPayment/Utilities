import { Component } from '@angular/core';
import { AuthService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Signature Calculator';
  url = 'https://api.alliedpayment.com';
  publicKey: string;
  privateKey: string;
  username: string;
  domain: string;
  onBehalfOf: string;
  httpMethod: string;
  signature:string;
  constructor(
    private authenticator: AuthService
  ) { }

  generateSignature(){
    this.signature = this.authenticator.sign(
      this.url,
      this.publicKey,
      this.privateKey,
      this.username,
      this.domain,
      this.onBehalfOf,
      this.httpMethod,
    );
  }

}

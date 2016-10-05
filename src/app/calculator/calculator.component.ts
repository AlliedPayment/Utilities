import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared';

@Component({
    selector: 'calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    url = 'https://api.alliedpayment.com';
    publicKey: string;
    privateKey: string;
    username: string;
    domain: string;
    onBehalfOf: string;
    httpMethod: string;
    signature: string;
    timestamp: string;
    timer: NodeJS.Timer;
    runTimer = true;
    valid = true;
    constructor(
        private authenticator: AuthService
    ) { }

    ngOnInit() {
        this.start();
    }

    generateSignature() {
        this.validate();
        if(!this.valid) return;
        this.signature = this.authenticator.sign(
            this.url,
            this.publicKey,
            this.privateKey,
            this.timestamp,
            this.username,
            this.domain,
            this.onBehalfOf,
            this.httpMethod,
        );
    }

    validate(){
        this.valid = this.url !== null 
        && this.url !== undefined 
        && this.url.length > 0 
        && this.privateKey !== null 
        && this.privateKey !== undefined 
        && this.privateKey.length > 0 
        && this.publicKey !== null 
        && this.publicKey !== undefined 
        && this.publicKey.length > 0 
        return this.valid;
    }

    toggleTimer() {
        this.runTimer = (this.runTimer) ? this.stop() : this.start();
    }

    start(): boolean {
        this.timer = setInterval(() => {
            this.timestamp = new Date().toISOString();
        }, 10);
        return true;
    }

    stop(): boolean {
        clearInterval(this.timer);
        return false;
    }
}
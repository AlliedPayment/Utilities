import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../shared';

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
    header: string;
    timestamp: string;
    timer: NodeJS.Timer;
    runTimer = true;
    constructor(
        private crypto: CryptoService
    ) { }

    ngOnInit() {
        this.start();
    }

    generateSignature() {
        if (!this.isValid) return;

        this.header = this.crypto.sign(
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

   private get isValid() {
        return this.url !== null
            && this.url !== undefined
            && this.url.length > 0
            && this.privateKey !== null
            && this.privateKey !== undefined
            && this.privateKey.length > 0
            && this.publicKey !== null
            && this.publicKey !== undefined
            && this.publicKey.length > 0;
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
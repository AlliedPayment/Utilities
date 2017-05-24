import { Injectable } from '@angular/core';

//use external crypto lib
declare var CryptoJS: any;

@Injectable()
export class AuthService {
    sign(
        url: string,
        publicKey: string,
        privateKey: string,
        timestamp?: string,
        username?: string,
        domain?: string,
        onBehalfOf?: string,
        httpMethod?: string,
    ): string {
        let newline = '\r\n';
        let ts = (timestamp) ? timestamp : new Date().toISOString();
        var message = `${url}${newline}${ts}${newline}`;

        let hash = CryptoJS.HmacSHA1(message, privateKey);
        let sig = hash.toString(CryptoJS.enc.Base64);

        var signature = 'TIMESTAMP ';
        if (username) {
            signature = `${signature}username=${username};`;
        }
        if (domain) {
            signature = `${signature}domain=${domain};`;
        }
        if (onBehalfOf) {
            signature = `${signature}onBehalfOf=${onBehalfOf};`;
        }
        signature = `${signature}timestamp=${ts};signature=${sig};publickey=${publicKey};`;
        return signature;
    }

    hash(obj: any) {
        let md5 = CryptoJS.MD5(JSON.stringify(obj));
        return md5.toString();
    }

    hashForJetpay(tid: string, amount: string, token: string, orderNumber: string) {
        let message = `${tid}${amount}${token}${orderNumber}`;
        let hash = CryptoJS.SHA512(message).toString();
        return hash;
    }
}
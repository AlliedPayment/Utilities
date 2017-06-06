import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CryptoService } from './shared';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator';
import { JetpayComponent } from './jetpay/jetpay.component';
import { EncoderComponent } from './encoder/encoder.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    JetpayComponent, EncoderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

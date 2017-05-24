import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './shared';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator';
import { JetpayComponent } from './jetpay/jetpay.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    JetpayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

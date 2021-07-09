import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  MemberComponent } from "./members/member.component"
import { FooterComponent } from "./footer/footer.component"

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

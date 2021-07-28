import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router"
import { HttpClientModule} from "@angular/common/http"

import {routing,appRoutingProviders} from "./app.routing"

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component"
import { PostComponent } from "./components/postIg/post.component"
import { MemberComponent } from "./components/members/member.component"
import { FooterComponent } from "./components/footer/footer.component"
import { TestComponent } from "./components/testing/test.component";
import { ContactComponent } from "./components/contact/contact.component"
import { ErrorComponent } from './components/error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    MemberComponent,
    FooterComponent,
    TestComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [RouterModule,appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router"

import {routing,appRoutingProviders} from "./app.routing"

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component"
import { PostComponent } from "./components/postIg/post.component"
import { MemberComponent } from "./components/members/member.component"
import { FooterComponent } from "./components/footer/footer.component"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    MemberComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [RouterModule,appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

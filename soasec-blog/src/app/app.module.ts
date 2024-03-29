import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopularPostComponent } from './popular-post/popular-post.component';
import { AllPostComponent } from './all-post/all-post.component';
import { AllAuthorComponent } from './all-author/all-author.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewPostComponent } from './view-post/view-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PopularPostComponent,
    AllPostComponent,
    AllAuthorComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

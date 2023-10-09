import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { CircleCompterComponent } from './components/circle-compter/circle-compter.component';
import { AboutComponent } from './components/about/about.component';
import { ActivityComponent } from './components/activity/activity.component';
import { WhyExposedComponent } from './components/why-exposed/why-exposed.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ContactComponent } from './components/contact/contact.component';
import {NgxTypedJsModule} from "ngx-typed-js";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CircleCompterComponent,
    AboutComponent,
    ActivityComponent,
    WhyExposedComponent,
    InscriptionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

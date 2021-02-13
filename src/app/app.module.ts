import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TitleBannerComponent } from './title-banner/title-banner.component';
import { UserInputComponent } from './user-input/user-input.component';
import {FormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { SurvivedComponent } from './survived/survived.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleBannerComponent,
    UserInputComponent,
    SurvivedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    DividerModule,
    InputNumberModule,
    CardModule,
    DropdownModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

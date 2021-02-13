import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputSwitchModule} from 'primeng/inputswitch';

import { AppComponent } from './app.component';
import { TitleBannerComponent } from './title-banner/title-banner.component';
import { UserInputComponent } from './user-input/user-input.component';
import {FormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    TitleBannerComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

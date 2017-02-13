//ANGULAR COMPONENTS
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LOCALE_ID } from '@angular/core';

//THIRD PARTY COMPONENTS


//SYSTEM COMPONENTS
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {InputDateComponent} from './input-date/input-date.component';
import {CounterInputComponent} from './counter-input/counter-input.component';
import {AddressInputComponent} from './address-input/address-input.component';
import {ContactForm3Component} from './contact-form3/contact-form3.component';
import {LocationComponent} from './location/location.component'

declare var $:any;
 
@NgModule({
  imports: [
    //ANGULAR IMPORTS
    BrowserModule,
    FormsModule

    //THIRD PARTY IMPORTS

  ],
  declarations: [
    //ANGULAR DECLARATIONS
    AppComponent,
    
    //SYSTEM DECLARATIONS
    HeroFormComponent,
    ContactFormComponent,
    InputDateComponent,
    CounterInputComponent,
    AddressInputComponent,
    ContactForm3Component,
    LocationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

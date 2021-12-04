import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { FiatComponent } from './fiat/fiat.component';
import { BmwComponent } from './bmw/bmw.component';
import { HyundaiComponent } from './hyundai/hyundai.component';
import { HondaComponent } from './honda/honda.component';
import { RenaultComponent } from './renault/renault.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';
import { CitroenComponent } from './citroen/citroen.component';
import { FordComponent } from './ford/ford.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ChevroletComponent,
    FiatComponent,
    BmwComponent,
    HyundaiComponent,
    HondaComponent,
    RenaultComponent,
    ToyotaComponent,
    VolkswagenComponent,
    CitroenComponent,
    FordComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

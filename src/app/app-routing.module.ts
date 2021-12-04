import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmwComponent } from './bmw/bmw.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { CitroenComponent } from './citroen/citroen.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { HondaComponent } from './honda/honda.component';
import { HyundaiComponent } from './hyundai/hyundai.component';
import { HomeComponent } from './home/home.component';
import { RenaultComponent } from './renault/renault.component';
import { MenuComponent } from './menu/menu.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';


const routes: Routes = [
{path:'bmw', component: BmwComponent}, 
{path:'chevrolet', component: ChevroletComponent},
{path:'citroen', component: CitroenComponent},
{path:'fiat', component: FiatComponent},
{path:'ford', component: FordComponent},
{path:'honda', component: HondaComponent},
{path:'hyundai', component: HyundaiComponent},
{path:'home', component: HomeComponent},
{path:'renault',component: RenaultComponent},
{path:'menu', component: MenuComponent},
{path:'toyota', component: ToyotaComponent},
{path:'volkswagen', component: VolkswagenComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

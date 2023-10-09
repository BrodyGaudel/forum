import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import {ActivityComponent} from "./components/activity/activity.component";
import {WhyExposedComponent} from "./components/why-exposed/why-exposed.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  {path: 'acceuil', component: MainComponent},
  {path: 'a-propos', component: AboutComponent},
  {path: 'nos-activites', component: ActivityComponent},
  {path: 'pourquoi-exposer', component: WhyExposedComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

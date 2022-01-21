import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeWhatIsComponent } from './components/home-what-is/home-what-is.component';
import { HomeRequierementsComponent } from './components/home-requierements/home-requierements.component';
import { HomeHowItWorksComponent } from './components/home-how-it-works/home-how-it-works.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeWhatIsComponent,
    HomeRequierementsComponent,
    HomeHowItWorksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

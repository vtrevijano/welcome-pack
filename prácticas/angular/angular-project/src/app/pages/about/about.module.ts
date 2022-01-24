import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutIntroductionComponent } from './components/about-introduction/about-introduction.component';
import { AboutBodyComponent } from './components/about-body/about-body.component';


@NgModule({
  declarations: [
    AboutComponent,
    AboutIntroductionComponent,
    AboutBodyComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDetailRoutingModule } from './list-detail-routing.module';
import { BiographyComponent } from './components/biography/biography.component';
import { ImageComponent } from './components/image/image.component';
import { PlacesComponent } from './components/places/places.component';
import { ListDetailComponent } from './list-detail.component';


@NgModule({
  declarations: [
    BiographyComponent,
    ImageComponent,
    PlacesComponent,
    ListDetailComponent
  ],
  imports: [
    CommonModule,
    ListDetailRoutingModule
  ]
})
export class ListDetailModule { }

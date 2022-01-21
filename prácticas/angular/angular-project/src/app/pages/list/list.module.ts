import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CharactersRequestComponent } from './components/card-list/characters-request.component';
import { FormsModule } from '@angular/forms';
import { AppPipesModule } from 'src/app/pipes/app-pipes.module';


@NgModule({
  declarations: [
    ListComponent,
    CharactersRequestComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    AppPipesModule
  ]
})
export class ListModule { }

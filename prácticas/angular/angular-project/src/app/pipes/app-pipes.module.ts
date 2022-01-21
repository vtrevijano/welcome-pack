import { NgModule } from '@angular/core';
import { PriorityNamePipe } from './filter-names.pipe';

@NgModule({
  imports: [],
  declarations: [
    PriorityNamePipe
  ],
  exports: [PriorityNamePipe]
})
export class AppPipesModule { }
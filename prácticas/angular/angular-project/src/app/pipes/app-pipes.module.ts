import { NgModule } from '@angular/core';
import { PriorityNamePipe } from './filter-names.pipe';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
  imports: [],
  declarations: [
    PriorityNamePipe,
    PaginationPipe
  ],
  exports: [PriorityNamePipe, PaginationPipe]
})
export class AppPipesModule { }
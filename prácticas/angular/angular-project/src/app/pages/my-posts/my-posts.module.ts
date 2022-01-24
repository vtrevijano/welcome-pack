import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPostsRoutingModule } from './my-posts-routing.module';
import { MyPostsComponent } from './my-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyPostsComponent],
  imports: [
    CommonModule,
    MyPostsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MyPostsModule { }

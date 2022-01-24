import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';


@NgModule({
  declarations: [FormComponent, FormCreateComponent, FormUpdateComponent, FormDeleteComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormModule { }

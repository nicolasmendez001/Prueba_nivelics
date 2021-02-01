import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    PagesComponent,
    RegisterComponent,
    TableComponent
  ],
  exports: [PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }

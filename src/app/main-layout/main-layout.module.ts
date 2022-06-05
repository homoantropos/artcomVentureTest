import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {SharedLayoutModule} from "../shared-layout/shared-layout.module";

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedLayoutModule
  ], exports: [
    ProductsListComponent
  ]
})
export class MainLayoutModule { }

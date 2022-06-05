import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NullCheckPipe} from "./pipes/null-check.pipe";
import {SearchPipe} from "./pipes/search.pipe";
import {ProductsListStylingDirective} from "./directives/products-list-styling.directive";
import {LoaderComponent} from "./components/loader/loader.component";
import {NgForCopyDirective} from "./directives/ng-for-copy.directive";
import {CloseAppDirective} from "./directives/close-app.directive";

@NgModule({
  declarations: [
    LoaderComponent,
    NgForCopyDirective,
    ProductsListStylingDirective,
    NullCheckPipe,
    CloseAppDirective,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    NgxPaginationModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    NgxPaginationModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NullCheckPipe,
    SearchPipe,
    ProductsListStylingDirective,
    LoaderComponent,
    NgForCopyDirective,
    CloseAppDirective
  ]
})
export class SharedLayoutModule { }

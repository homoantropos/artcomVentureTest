import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { ProductsListComponent } from './main-layout/components/products-list/products-list.component';
import { LoaderComponent } from './shared-layout/components/loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { NgForCopyDirective } from './shared-layout/directives/ng-for-copy.directive';
import { ProductsListStylingDirective } from './shared-layout/directives/products-list-styling.directive';
import {MatIconModule} from "@angular/material/icon";
import { NullCheckPipe } from './shared-layout/pipes/null-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    LoaderComponent,
    NgForCopyDirective,
    ProductsListStylingDirective,
    NullCheckPipe
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        FormsModule,
        NgxPaginationModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

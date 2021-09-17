import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';
import {ProductDetailComponent} from './component/product-detail/product-detail.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HeaderComponent} from './component/header-footer/header/header.component';
import {FooterComponent} from './component/header-footer/footer/footer.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {Eror404Component} from './component/header-footer/eror404/eror404.component';
import {ProductEditComponent} from './component/product-edit/product-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductDeleteComponent} from './component/product-delete/product-delete.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    Eror404Component,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

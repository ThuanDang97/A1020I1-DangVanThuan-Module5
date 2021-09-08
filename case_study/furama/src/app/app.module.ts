import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContractModule} from "./contract/contract.module";
import {ServiceModule} from "./service/service.module";
import {CustomerModule} from "./customer/customer.module";
import {EmployeeModule} from "./employee/employee.module";
import {ComponentModule} from "./component/component.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    ContractModule,
    ServiceModule,
    CustomerModule,
    EmployeeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

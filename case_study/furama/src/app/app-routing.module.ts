import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from "./component/home-component/home-component.component";
import {CustomerRoutingModule} from "./customer/customer-routing.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {EmployeeRoutingModule} from "./employee/employee-routing.module";


const routes: Routes = [

  // home
  {path:'', component:HomeComponentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomerRoutingModule, EmployeeRoutingModule, Ng2SearchPipeModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }

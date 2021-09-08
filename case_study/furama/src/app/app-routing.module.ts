import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from "./component/home-component/home-component.component";
import {CustomerComponent} from "./customer/customer/customer.component";
import {EmployeeComponent} from "./employee/employee/employee.component";
import {ServiceComponent} from "./service/service/service.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {ContractComponent} from "./contract/contract/contract.component";

const routes: Routes = [

  // home
  {path:'', component:HomeComponentComponent},

  // customer
  {path: "customer", component: CustomerComponent},
  {path: "customer/create", component: CustomerCreateComponent},

  // employee
  {path: "employee", component: EmployeeComponent},
  {path: "service", component: ServiceComponent},
  {path: "contract", component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from "./component/home-component/home-component.component";
import {CustomerComponent} from "./customer/customer/customer.component";
import {EmployeeComponent} from "./employee/employee/employee.component";
import {ServiceComponent} from "./service/service/service.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {ContractComponent} from "./contract/contract/contract.component";
import {CustomerDetailComponent} from "./customer/customer-detail/customer-detail.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";

const routes: Routes = [

  // home
  {path:'', component:HomeComponentComponent},

  // customer
  {path: "customer", component: CustomerComponent},
  {path: "customer/create", component: CustomerCreateComponent},
  {path: "customer/info", component: CustomerDetailComponent},
  {path: "customer/edit", component: CustomerEditComponent},
  // {path: "customer/delete", component: Customer},

  // employee
  {path: "employee", component: EmployeeComponent},

  // service
  {path: "service", component: ServiceComponent},

  //contract
  {path: "contract", component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./component/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product-create/product-create.component";
import {ProductEditComponent} from "./component/product-edit/product-edit.component";
import {Eror404Component} from "./component/header-footer/eror404/eror404.component";

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: ProductCreateComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'detail/:id', component: Eror404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

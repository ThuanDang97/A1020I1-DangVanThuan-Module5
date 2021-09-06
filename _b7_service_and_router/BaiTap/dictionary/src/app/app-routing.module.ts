import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {DictionaryComponent} from "./dictionary/dictionary.component";

const routes: Routes = [
  {path: '', component:DictionaryComponent},
  {path: 'page', component:DictionaryPageComponent},
  {path: 'detail', component:DictionaryDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

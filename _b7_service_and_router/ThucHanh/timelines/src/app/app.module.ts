import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent
  ],
    imports: [
        BrowserModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

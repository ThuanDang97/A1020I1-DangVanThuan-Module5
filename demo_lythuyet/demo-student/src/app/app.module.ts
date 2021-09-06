import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TemplateFormStudentComponent } from './template-form-student/template-form-student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormStudentComponent } from './reactive-form-student/reactive-form-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    TemplateFormStudentComponent,
    ReactiveFormStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

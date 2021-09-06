import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {StudentData} from "../StudentData";

@Component({
  selector: 'app-template-form-student',
  templateUrl: './template-form-student.component.html',
  styleUrls: ['./template-form-student.component.css']
})
export class TemplateFormStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createStudent(studentForm: NgForm) {
    StudentData.push(studentForm.value);
  }
}


import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentData} from "../StudentData";

@Component({
  selector: 'app-reactive-form-student',
  templateUrl: './reactive-form-student.component.html',
  styleUrls: ['./reactive-form-student.component.css']
})
export class ReactiveFormStudentComponent implements OnInit {

  createStudentForm! : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createStudentForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl(''),
      address: new FormControl(''),
      img: new FormControl('https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg'),
      mark: new FormControl(0),
    })
  }

  createStudent() {
    StudentData.unshift(this.createStudentForm.value)
  }
}

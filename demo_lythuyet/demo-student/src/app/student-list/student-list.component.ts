import { Component, OnInit } from '@angular/core';
import {Student} from "../IStudent";
import {StudentData} from "../StudentData";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  students : Student[] = StudentData;

  student : any;

  ngOnInit(): void {
  }


  sendInfoStudent(student : Student) {

    console.log(student);
    this.student = student;

  }
}

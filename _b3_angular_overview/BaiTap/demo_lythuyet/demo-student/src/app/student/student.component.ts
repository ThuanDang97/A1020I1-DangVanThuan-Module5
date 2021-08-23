import {Component, OnInit} from '@angular/core';
import {Student} from "../IStudent";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {
  constructor() {
  }

  student1: Student = {
    name: "Thuận Đặng",
    age: 24,
    address: "Đà Nẵng",
    img : "https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg",
    mark : 1,
  };

  ngOnInit() {

  }

  changeMark(value: any) {
    this.student1.mark = value;
  };
}

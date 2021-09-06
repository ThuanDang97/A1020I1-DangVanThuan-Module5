import {Component, Input, OnInit, Output} from '@angular/core';
import {Student} from "../IStudent";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {
  constructor() {
  }

  @Input()
  student1 : Student | any;

  // @Output

  ngOnInit() {

  }

  changeMark(value: any) {
    this.student1.mark = value;
  };
}

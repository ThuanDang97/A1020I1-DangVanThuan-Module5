import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit() {
  }

  onChange(value : any) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}

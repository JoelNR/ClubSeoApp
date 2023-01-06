import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-date-chip',
  templateUrl: './date-chip.component.html',
  styleUrls: ['./date-chip.component.scss'],
})
export class DateChipComponent implements OnInit {
  @Input() date: string
  @Input() showTimeElapsed: boolean = false
  constructor() { }

  ngOnInit() {
    dayjs.extend(relativeTime);
    this.date = dayjs(this.date).format('MM/DD/YYYY')
  }

  getTimeElapsed(date: string){
    if(this.showTimeElapsed){
      return dayjs(date).fromNow()
    } else {
      return dayjs(date).format('DD/MM/YYYY')
    }
  }
}

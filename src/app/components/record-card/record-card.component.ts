import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileRecords } from 'src/app/models/profile';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss'],
})
export class RecordCardComponent extends CapacitorBase implements OnInit {
  @Input() recordModel: ProfileRecords
  @Input() userId: string

  constructor() {
    super()
   }

  ngOnInit() {}

  parseDateFormat(date: string){
    return dayjs(date).format('DD/MM/YYYY')
  }
}

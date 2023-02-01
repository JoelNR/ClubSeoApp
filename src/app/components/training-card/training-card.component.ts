import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { TrainingModel } from 'src/app/models/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent implements OnInit {
  @Input() training: TrainingModel

  constructor() { }

  ngOnInit() {}

  parseDateFormat(date: string){
    return dayjs(date).format('DD/MM/YYYY')
  }
}

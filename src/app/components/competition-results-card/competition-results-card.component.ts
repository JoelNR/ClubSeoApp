import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileCompetitions } from 'src/app/models/profile';

@Component({
  selector: 'app-competition-results-card',
  templateUrl: './competition-results-card.component.html',
  styleUrls: ['./competition-results-card.component.scss'],
})
export class CompetitionResultsCardComponent extends CapacitorBase implements OnInit {
  @Input() profileCompetition: ProfileCompetitions

  constructor() { 
    super()
  }

  ngOnInit() {}

  parseDateFormat(date: string){
    return dayjs(date).format('DD/MM/YYYY')
  }

}

import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionModel } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage extends CapacitorBase implements OnInit {
  competitionArray: CompetitionModel[]
  test: boolean = false

  constructor(private competitionService: CompetitionService) { 
    super()
  }

  ngOnInit() {
    this.competitionService.competition().subscribe(res=>{
      this.competitionArray = res.data.competitions
      this.test = true
    })
  }

}

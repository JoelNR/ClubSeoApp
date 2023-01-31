import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionArcherModel, CompetitionModel } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-see-score',
  templateUrl: './see-score.page.html',
  styleUrls: ['./see-score.page.scss'],
})
export class SeeScorePage extends CapacitorBase implements OnInit {
  archer: CompetitionArcherModel
  competitionModel: CompetitionModel
  total: number

  constructor(private route: ActivatedRoute,
    private competitionService: CompetitionService) {
    super()
  }



  ngOnInit() {
    this.getCompetitionData()
  }

  private getCompetitionData() {
    this.route.paramMap.subscribe(param => {
      this.competitionService.getCompetitionTargetDataById(param.get('id'), param.get('user')).subscribe(res => {
        this.competitionModel = res.data.competitions;
        this.archer = res.data.archers.find(archer => archer.archer.user_id == param.get('user'))
      });
    });
  }

 handleRefresh(event) {
   setTimeout(() => {
     this.getCompetitionData()
     event.target.complete();
   }, 2000);
 }

}
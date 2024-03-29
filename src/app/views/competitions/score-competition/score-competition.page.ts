import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionArcherModel, CompetitionModel } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-score-competition',
  templateUrl: './score-competition.page.html',
  styleUrls: ['./score-competition.page.scss'],
})
export class ScoreCompetitionPage extends CapacitorBase implements OnInit {
  archers: CompetitionArcherModel[]
  competitionModel: CompetitionModel
  total: number[] = [0,0,0,0]
  index: number = 0
  selectedArcher: CompetitionArcherModel

  constructor(private route: ActivatedRoute,
    private competitionService: CompetitionService) {
    super()
  }



  ngOnInit() {
    this.getCompetitionData()
  }

  private getCompetitionData() {
    this.route.paramMap.subscribe(param => {
      this.competitionService.getCompetitionTargetById(param.get('id')).subscribe(res => {
        this.competitionModel = res.data.competitions;
        this.archers = res.data.archers
        this.archers.sort((a,b) => a.target_letter.localeCompare(b.target_letter))
        this.selectedArcher = this.archers[this.index]
      });
    });
  }

 handleRefresh(event) {
   setTimeout(() => {
     this.getCompetitionData()
     event.target.complete();
   }, 2000);
 };



  changeArcher(event: any){
    this.index = this.archers.findIndex(archer => archer.archer.user_id == event.target.value)
    this.selectedArcher =  this.archers[this.index]
  }

  changeIndexRight(){
    if(this.index >=  this.archers.length-1){
      this.index = 0
    } else {
      this.index++
    }
    this.selectedArcher = this.archers[this.index]
  }

  changeIndexLeft(){
    if(this.index <=  0){
      this.index = this.archers.length-1
    } else {
      this.index--
    }
    this.selectedArcher =  this.archers[this.index]
  }

  setTotal(event: any, id: string){
    if(id == this.selectedArcher.archer.user_id){
      this.selectedArcher.points = event
    }
  }
}

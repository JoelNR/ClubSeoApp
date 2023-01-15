import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RoundModel, ScoreModel } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  roundsArray: RoundModel[]
  scoreModel: ScoreModel
  
  @Input() modality: string
  @Input() competitionId: string
  @Input() archerId: string
  @Input() category: string
  doNotEmit: boolean = true
  @Output() emitPoints: EventEmitter<number> = new EventEmitter()
  showSecondRound: boolean = false

  constructor(private scoreService: ScoreService,
    private ngxService: NgxUiLoaderService) { }
  
  ngOnInit() {

    this.ngxService.startLoader("loader-score-component"+  this.archerId);
    
    this.scoreService.storeScore(this.archerId, this.competitionId).subscribe(res => {
      this.scoreModel = res.data.score
      this.emitPoints.emit(this.scoreModel.points)
      this.roundsArray = res.data.rounds
      this.ngxService.stopLoader('loader-score-component' +  this.archerId);
    })
  }

  emitTotal(event: any){
    this.scoreModel.points += event
    this.emitPoints.emit(this.scoreModel.points)
  }

  showNewRound(){
    this.showSecondRound = true
  }
}

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

  constructor(private scoreService: ScoreService,
    private ngxService: NgxUiLoaderService) { }
  
  ngOnInit() {

    this.ngxService.startLoader("loader-score-component"+  this.archerId);
    
    this.scoreService.storeScore(this.archerId, this.competitionId).subscribe(res => {
      this.scoreModel = res.data.score
      this.emitPoints.emit(this.scoreModel.points)
      this.scoreService.storeRound(this.archerId, this.scoreModel.id).subscribe(res => {
        this.roundsArray = res.data.rounds
        this.ngxService.stopLoader('loader-score-component' +  this.archerId);
      })
    })
  }

  emitTotal(event: any){
    this.scoreModel.points += event
    this.scoreService.updateScore(this.scoreModel.id, this.scoreModel.points).subscribe(res=>{})
    this.emitPoints.emit(this.scoreModel.points)
  }
}

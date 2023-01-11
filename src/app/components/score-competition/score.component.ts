import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoundModel, ScoreModel } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  roundsArray: RoundModel[]
  total: number = 0
  scoreModel: ScoreModel
  
  @Input() modality: string
  @Input() competitionId: string
  @Input() archerId: string
  @Output() emitPoints: EventEmitter<number> = new EventEmitter()

  constructor(private scoreService: ScoreService) { }
  
  ngOnInit() {
    this.scoreService.storeScore(this.archerId, this.competitionId).subscribe(res => {
      this.scoreModel = res.data.score
      this.scoreService.storeRound(this.archerId, this.scoreModel.id).subscribe(res => {
        this.roundsArray = res.data.rounds
      })
    })
  }

  emitTotal(event: any){
    this.total += event
    this.emitPoints.emit(this.total)
  }
}

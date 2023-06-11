import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RoundModel, ScoreModel } from 'src/app/models/score';
import { ModalService } from 'src/app/services/modal.service';
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
  @Input() disableScoreFunction: boolean = false
  @Input() trainingId: string
  doNotEmit: boolean = true
  @Output() emitPoints: EventEmitter<number> = new EventEmitter()
  showSecondRound: boolean = false

  constructor(private scoreService: ScoreService,
    private ngxService: NgxUiLoaderService,
    private modalService: ModalService) { }
  
  ngOnInit() {
    this.showModal()
    this.ngxService.startLoader("loader-score-component"+  this.archerId);
    if(this.competitionId){
      this.scoreService.storeScore(this.archerId, this.competitionId).subscribe(res => {
        this.scoreModel = res.data.score
        this.emitPoints.emit(this.scoreModel.points)
        this.roundsArray = res.data.rounds
        this.ngxService.stopLoader('loader-score-component' +  this.archerId);
      })      
    } else if(this.trainingId) {
      this.scoreService.storeScore(this.archerId, null,this.trainingId).subscribe(res => {
        this.scoreModel = res.data.score
        this.emitPoints.emit(this.scoreModel.points)
        this.roundsArray = res.data.rounds
        this.ngxService.stopLoader('loader-score-component' +  this.archerId);
      })  
    }

  }

  emitTotal(event: any){
    this.scoreModel.points += event
    this.emitPoints.emit(this.scoreModel.points)
  }

  showNewRound(){
    this.showSecondRound = true
  }

  showModal(){
    if(localStorage.getItem('score-modal') != 'true'){
      this.modalService.showModal(`Instrucciones`,
      ['Pulse sobre las casillas en blanco y podrá añadir todas las flechas de una tanda. Una vez rellena la tanda, si quiere editarlas, pulse la flecha que desea cambiar.'],
      [{text:'Cerrar', color:'primary', fill:'outline',onClick: ()=> { this.modalService.dismiss()}}]
      )
      localStorage.setItem('score-modal','true')
    }
  }
}

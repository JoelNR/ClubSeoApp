import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { TrainingModel } from 'src/app/models/training';
import { ModalService } from 'src/app/services/modal.service';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent extends CapacitorBase implements OnInit {
  @Input() training: TrainingModel

  @Output() emit: EventEmitter<any> = new EventEmitter()

  constructor(private modalService: ModalService,
    private trainingService: TrainingService) {
      super()
  }

  ngOnInit() {}

  parseDateFormat(date: string){
    return dayjs(date).format('DD/MM/YYYY')
  }

  showModal(){
    this.modalService.showModal(`Eliminar`,
      ['¿Estás seguro de que quieres eliminar este entrenamiento?'],
      [{text:'Sí, eliminalo', color:'primary', 
      onClick: ()=> {this.trainingService.deleteTraining(this.training.id).subscribe(res =>{
        this.emit.emit()
      })
      ,this.modalService.dismiss()}},
      {text:'Cancelar', color:'primary', fill:'outline',onClick: ()=> { this.modalService.dismiss()}}]
    )
  }
}

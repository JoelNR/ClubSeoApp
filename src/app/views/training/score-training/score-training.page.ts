import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { TrainingModel } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-score-training',
  templateUrl: './score-training.page.html',
  styleUrls: ['./score-training.page.scss'],
})
export class ScoreTrainingPage extends CapacitorBase implements OnInit {
  trainingModel: TrainingModel
  total: number[] = [0,0,0,0]
  index: number = 0

  constructor(private route: ActivatedRoute,
    private trainingService: TrainingService) {
    super()
  }



  ngOnInit() {
    this.getTrainingData()
  }

  private getTrainingData() {
    this.route.paramMap.subscribe(param => {
      this.trainingService.getTrainingById(param.get('id')).subscribe(res => {
        this.trainingModel = res.data.training;
      });
    });
  }

 handleRefresh(event) {
   setTimeout(() => {
     this.getTrainingData()
     event.target.complete();
   }, 2000);
 };


  setTotal(event: any){
      this.trainingModel.points = event
  }
}

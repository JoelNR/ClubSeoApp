import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { TrainingModel } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage extends CapacitorBase implements OnInit {

  trainingsArray: TrainingModel[] = []
  searchKeyword: string = ""
  results: any
  createInterface: boolean = false

  userModality: string = 'Aire libre'
  modalityOptions: string[] = ['Sala', 'Aire libre']
  userCategory: string
  categoryOptions: string[] = ['Olímpico', 'Poleas', 'Desnudo','Tradicional', 'Longbow']
  userDistance: string
  distanceOptions: string[]
  userTitle: string

  constructor(private trainingService: TrainingService,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.getTrainings()
  }

  private getTrainings() {
    this.ngxService.startLoader("loader-trainings");
    this.trainingService.getTrainings().subscribe(res => {
      this.trainingsArray = res.data.training;
      this.results = this.trainingsArray;
      this.ngxService.stopLoader("loader-trainings");
    });
  }

  search(){
    if (this.searchKeyword === "") {
      this.results = [...this.trainingsArray]
      return
    }

    this.results = this.trainingsArray.filter(result => result.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
  }

  create(){
    this.ngxService.startLoader("loader-trainings");
    this.trainingService.storeTraining(this.userModality, this.userCategory,Number(this.userDistance),this.userTitle).subscribe(res =>{
      this.trainingsArray.unshift(res.data.training)
      this.ngxService.stopLoader("loader-trainings")
    })
  }

  changeCategory(event){
    this.userCategory = event.detail.value
    this.setDistancesOptions()
  }

  changeDistance(event){
    this.userDistance = event.detail.value
  }

  changeModality(event){
    this.userModality = event.detail.value
    this.setDistancesOptions()
  }

  setDistancesOptions(){
    if (this.userModality == 'Sala'){
      this.distanceOptions = ['18','14']
    } else {
      switch (this.userCategory){
        case 'Olímpico': {
          this.distanceOptions = ['70', '60', '50', '40', '30', '24', '18']
          break;
        }
        case 'Poleas': {
          this.distanceOptions = ['50', '40', '30', '24', '18']
          break;
        }
        case 'Desnudo': {
          this.distanceOptions = ['50', '40', '30', '24', '18']
          break;
        }
        case 'Tradicional': {
          this.distanceOptions = ['30', '24', '18']
          break;
        }
        case 'Longbow': {
          this.distanceOptions = ['30', '24', '18']
          break;
        }
      }      
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getTrainings()
      event.target.complete();
    }, 2000);
  };
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionService } from 'src/app/services/competition.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score-competition',
  templateUrl: './score-competition.page.html',
  styleUrls: ['./score-competition.page.scss'],
})
export class ScoreCompetitionPage extends CapacitorBase implements OnInit {
  archers: string[] = ['Jose Antonio Rodríguez', 'Joel Navarro','Joele Navarro','Joely Navarro']
  target: string[] = ['1A','1B','1C','1D']
  title: string = 'Trofeo caramelo'
  total: number[] = [0,0,0,0]
  index: number = 0
  selectedArcher: string

  constructor(private route: ActivatedRoute,    
    private ngxService: NgxUiLoaderService,
    private scoreService: ScoreService) {
    super()
  }

  ngOnInit() {
    this.selectedArcher = this.archers[0]
  }

 private getscoreData() {
   this.ngxService.startLoader('loader-score-details');
   this.route.paramMap.subscribe(param => {
     this.scoreService
     this.ngxService.stopLoader('loader-score-details');
   });
 }

 handleRefresh(event) {
   setTimeout(() => {
     this.getscoreData()
     event.target.complete();
   }, 2000);
 };



  changeArcher(event: any){
    this.index = this.archers.findIndex(archer => archer == event.target.value)
    this.selectedArcher =  this.archers[this.index]
  }

  changeIndexRight(){
    if(this.index >=  this.archers.length-1){
      this.index = 0
    } else {
      this.index++
    }
    this.selectedArcher =  this.archers[this.index]
  }

  changeIndexLeft(){
    if(this.index <=  0){
      this.index = this.archers.length-1
    } else {
      this.index--
    }
    this.selectedArcher =  this.archers[this.index]
  }

}

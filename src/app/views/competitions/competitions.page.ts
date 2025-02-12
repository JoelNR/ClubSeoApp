import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionModel } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage extends CapacitorBase implements OnInit {
  competitionArray: CompetitionModel[] = []
  pastCompetitionArray: CompetitionModel[] = []
  searchKeyword: string = ""
  results: any = []
  pastResults: any = []

  constructor(private competitionService: CompetitionService,) { 
    super()
  }

  ngOnInit() {
    this.getCompetitionData();
  }

  private getCompetitionData() {
    this.competitionService.competition().subscribe(res => {
      this.competitionArray = res
      let pastIndex = this.competitionArray.findIndex(competition =>  dayjs(competition.date).isBefore(dayjs()))  
      if(pastIndex = -1){
        this.results =this.competitionArray
      } else {
        this.results = this.competitionArray.slice(0,pastIndex)
        this.pastCompetitionArray = this.competitionArray.slice(pastIndex)
      } 
           
      this.pastResults = this.pastCompetitionArray
    });
  }

  search(){
    if (this.searchKeyword === "") {
      this.results = [...this.competitionArray]
      this.pastResults = [...this.pastCompetitionArray]
      return
    }

    this.results = this.competitionArray.filter(result => result.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
    this.pastResults = this.pastCompetitionArray.filter(result => result.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getCompetitionData()
      event.target.complete();
    }, 2000);
  };
}

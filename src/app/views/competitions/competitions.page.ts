import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionModel } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage extends CapacitorBase implements OnInit {
  competitionArray: CompetitionModel[]
  pastCompetitionArray: CompetitionModel[]
  searchKeyword: string = ""
  results: any = []
  pastResults: any = []

  constructor(private competitionService: CompetitionService,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.getCompetitionData();
  }

  private getCompetitionData() {
    this.ngxService.startLoader("loader-competition");
    this.competitionService.competition().subscribe(res => {
      this.competitionArray = res.data.competitions;
      let pastIndex = this.competitionArray.findIndex(competition =>  dayjs(competition.date).isBefore(dayjs()))
      this.pastCompetitionArray = this.competitionArray.splice(pastIndex)
      this.competitionArray = this.competitionArray.splice(0,pastIndex)
      this.results = this.competitionArray
      this.pastResults = this.pastCompetitionArray
      this.ngxService.stopLoader('loader-competition');
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

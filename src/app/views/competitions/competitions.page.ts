import { Component, OnInit } from '@angular/core';
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

  constructor(private competitionService: CompetitionService,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.ngxService.startLoader("loader-competition");
    this.competitionService.competition().subscribe(res=>{
      this.competitionArray = res.data.competitions
      this.ngxService.stopLoader('loader-competition')
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionModel } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.page.html',
  styleUrls: ['./competition-detail.page.scss'],
})
export class CompetitionDetailPage extends CapacitorBase implements OnInit {
  competitionModel: CompetitionModel

  constructor(private competitionService: CompetitionService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.ngxService.startLoader('loader-competition-details')
    this.route.paramMap.subscribe(param => {
      this.competitionService.getCompetitionById(param.get('id')).subscribe(res =>{
        this.competitionModel = res.data.competitions
      })
      this.ngxService.stopLoader('loader-competition-details')
    })
  }

}

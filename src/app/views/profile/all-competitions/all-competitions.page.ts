import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileCompetitions } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-all-competitions',
  templateUrl: './all-competitions.page.html',
  styleUrls: ['./all-competitions.page.scss'],
})
export class AllCompetitionsPage extends  CapacitorBase implements OnInit {

  competitionArray: ProfileCompetitions[] = []
  searchKeyword: string = ""
  results: any
  userId: string

  constructor(private profileService: ProfileService,
    private ngxService: NgxUiLoaderService,
    private route: ActivatedRoute) { 
    super()
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      if (param.get('id') == 'self') {
        this.userId = localStorage.getItem('user_id')
      } else {
        this.userId = param.get('id')
      }
      this.getCompetitions(this.userId)
    })
  }

  private getCompetitions(id: string) {
    this.ngxService.startLoader("loader-news");
    this.profileService.getProfileCompetition(id).subscribe(res => {
      this.competitionArray = res.data.competitions;
      this.results = this.competitionArray;
      this.ngxService.stopLoader("loader-news");
    });
  }

  search(){
    if (this.searchKeyword === "") {
      this.results = [...this.competitionArray]
      return
    }

    this.results = this.competitionArray.filter(result => result.competition.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getCompetitions(this.userId)
      event.target.complete();
    }, 2000);
  };
}

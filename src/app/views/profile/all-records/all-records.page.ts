import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileRecords } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.page.html',
  styleUrls: ['./all-records.page.scss'],
})
export class AllRecordsPage extends CapacitorBase implements OnInit {

  recordsArray: ProfileRecords[] = []
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
    this.profileService.getProfileRecords(id).subscribe(res => {
      this.recordsArray = res.data.records;
      this.results = this.recordsArray;
      this.ngxService.stopLoader("loader-news");
    });
  }

  search(){
    if (this.searchKeyword === "") {
      this.results = [...this.recordsArray]
      return
    }

    this.results = this.recordsArray.filter(result => result.record.category.toLowerCase().includes(this.searchKeyword.toLowerCase()))
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getCompetitions(this.userId)
      event.target.complete();
    }, 2000);
  };
}

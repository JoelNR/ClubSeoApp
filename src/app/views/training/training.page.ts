import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileCompetitions } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage extends CapacitorBase implements OnInit {

  competitionArray: ProfileCompetitions[] = []
  searchKeyword: string = ""
  results: any
  userId: string
  createInterface: boolean = false

  userModality: string = 'Aire libre'
  modalityOptions: string[] = ['Sala', 'Aire libre']
  userCategory: string
  categoryOptions: string[] = ['Olímpico', 'Poleas', 'Desnudo','Tradicional', 'Longbow']
  userDistance: string
  distanceOptions: string[]
  userTitle: string

  constructor(private profileService: ProfileService,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.getCompetitions(localStorage.getItem('user_id'))
  }

  private getCompetitions(id: string) {
    this.ngxService.startLoader("loader-all-competitions");
    this.profileService.getAllProfileCompetition(id).subscribe(res => {
      this.competitionArray = res.data.competitions;
      this.results = this.competitionArray;
      this.ngxService.stopLoader("loader-all-competitions");
    });
  }

  search(){
    if (this.searchKeyword === "") {
      this.results = [...this.competitionArray]
      return
    }

    this.results = this.competitionArray.filter(result => result.competition.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
  }

  create(){

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
      this.distanceOptions = ['18 metros','14 metros']
    } else {
      switch (this.userCategory){
        case 'Olímpico': {
          this.distanceOptions = ['70 metros', '60 metros', '50 metros', '40 metros', '30 metros', '24 metros', '18 metros']
          break;
        }
        case 'Poleas': {
          this.distanceOptions = ['50 metros', '40 metros', '30 metros', '24 metros', '18 metros']
          break;
        }
        case 'Desnudo': {
          this.distanceOptions = ['50 metros', '40 metros', '30 metros', '24 metros', '18 metros']
          break;
        }
        case 'Tradicional': {
          this.distanceOptions = ['30 metros', '24 metros', '18 metros']
          break;
        }
        case 'Longbow': {
          this.distanceOptions = ['30 metros', '24 metros', '18 metros']
          break;
        }
      }      
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getCompetitions(this.userId)
      event.target.complete();
    }, 2000);
  };
}

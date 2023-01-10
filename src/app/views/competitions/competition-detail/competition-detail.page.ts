import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionArcherModel, CompetitionModel } from 'src/app/models/competition';
import { ProfileModel } from 'src/app/models/profile';
import { CompetitionService } from 'src/app/services/competition.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.page.html',
  styleUrls: ['./competition-detail.page.scss'],
})
export class CompetitionDetailPage extends CapacitorBase implements OnInit {
  competitionModel: CompetitionModel
  competitionArchers: CompetitionArcherModel[] = null
  userCategory: string
  categoryOptions: string[] = ['Olímpico', 'Poleas', 'Desnudo','Tradicional', 'Longbow']

  tableCompetitionData: any

  userSignedUp: boolean = false
  userNotRegisted: boolean = true

  constructor(private competitionService: CompetitionService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.getCompetitionData();
  }

  private getCompetitionData() {
    this.ngxService.startLoader('loader-competition-details');
    this.route.paramMap.subscribe(param => {
      this.competitionService.getCompetitionById(param.get('id')).subscribe(res => {
        this.competitionModel = res.data.competitions;
        this.tableCompetitionData = [{ label: 'Nombre', content: this.competitionModel.title },
        { label: 'Descripción', content: this.competitionModel.description },
        { label: 'Lugar', content: this.competitionModel.place },
        { label: 'Modalidad', content: this.competitionModel.modality },
        { label: 'Fecha', content: this.competitionModel.date },];
        this.competitionArchers = res.data.usersArray;
        this.getProfileData();
        this.ngxService.stopLoader('loader-competition-details');
      });

    });
  }

  private getProfileData() {
    if(localStorage.getItem('user_id')){
      this.profileService.profile(localStorage.getItem('user_id')).subscribe(res => {
        this.userCategory = res.data.profile.category
        this.userSignedUp = this.competitionArchers.some(archer => archer.archer.user_id == localStorage.getItem('user_id'))
      }) 
      this.userNotRegisted = false     
    }
  }

  changeCategory(event){
    this.userCategory = event.detail.value
  }

  submitInscription(){
    this.competitionService.submitInscription(this.competitionModel.id,this.userCategory).subscribe(res=>{
      if (res.data.success){
        this.getCompetitionData()
      }
    })
  }

}

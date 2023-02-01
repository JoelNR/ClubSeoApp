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
  userDistance: string
  distanceOptions: string[]
  tableCompetitionData: any

  userSignedUp: boolean = false
  userNotRegisted: boolean = true
  disableInscription: boolean = false

  constructor(private competitionService: CompetitionService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {

    this.getCompetitionData();        
    this.route.url.subscribe(res=>{
          this.getProfileData();
    })
  }

  private getCompetitionData() {
    this.route.paramMap.subscribe(param => {
      this.competitionService.getCompetitionById(param.get('id')).subscribe(res => {
        this.competitionModel = res.data.competitions;
        this.tableCompetitionData = [{ label: 'Nombre', content: this.competitionModel.title },
        { label: 'Descripción', content: this.competitionModel.description },
        { label: 'Lugar', content: this.competitionModel.place },
        { label: 'Modalidad', content: this.competitionModel.modality },
        { label: 'Fecha', content: this.competitionModel.date },];
        this.competitionArchers = res.data.usersArray;
        this.competitionArchers.sort((a,b) => a.target_number-b.target_number)
        this.setDistancesOptions()
      });

    });
  }

  private getProfileData() {
    if(localStorage.getItem('user_id')){
      this.profileService.profile(localStorage.getItem('user_id')).subscribe(res => {
        this.userCategory = res.data.profile.category
        this.userSignedUp = this.competitionArchers.some(archer => archer.archer.user_id == localStorage.getItem('user_id'))
        this.disableInscription = this.userSignedUp
      }) 
      this.userNotRegisted = false     
    } else {
      this.userNotRegisted = true 
      this.userSignedUp = false
    }
  }

  changeCategory(event){
    this.userCategory = event.detail.value
    this.setDistancesOptions()
  }

  changeDistance(event){
    this.userDistance = event.detail.value
  }

  submitInscription(){
    this.disableInscription = true
    this.competitionService.submitInscription(this.competitionModel.id,this.userCategory, parseInt(this.userDistance.split(' ')[0])).subscribe(res=>{
      if (res.data.success){
        this.getCompetitionData()
        this.getProfileData();
      }
    })
  }

  setDistancesOptions(){
    if (this.competitionModel.modality == 'Sala'){
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

  parseDistanceText(index: number){
    if(this.competitionArchers){
      return this.competitionArchers[index].target_number ? this.competitionArchers[index].target_number +  this.competitionArchers[index].target_letter : 'Sin Asignar'
    }
  }
}

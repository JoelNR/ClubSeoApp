import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionModel } from 'src/app/models/competition';
import { ProfileModel } from 'src/app/models/profile';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.page.html',
  styleUrls: ['./competition-detail.page.scss'],
})
export class CompetitionDetailPage extends CapacitorBase implements OnInit {
  competitionModel: CompetitionModel
  participantsArray: any[]

  tableCompetitionData: any

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
        this.tableCompetitionData = [{label: 'Nombre', content: this.competitionModel.title},
        {label: 'Descripción', content: this.competitionModel.description},
        {label: 'Lugar', content: this.competitionModel.place},
        {label: 'Modalidad', content: this.competitionModel.modality},
        {label: 'Fecha', content: this.competitionModel.date},]
      })
      this.ngxService.stopLoader('loader-competition-details')
    })

    this.participantsArray = [{first_name: 'Jose Antonio',last_name: 'Rodríguez',category: 'Olímpico',user_id: '1', target: '1A',image: '/assets/img/default-avatar.png'},
    {first_name: 'Joel',last_name: 'Navarro Rivero',category: 'Olímpico',user_id: '2', target: '1B',image: '/assets/img/default-avatar.png'},
    {first_name: 'Joel',last_name: 'Navarro Rivero',category: 'Desnudo',user_id: '3', target: '2A',image: '/assets/img/default-avatar.png'},
    {first_name: 'Joel',last_name: 'Navarro Rivero',category: 'Compuesto',user_id: '4', target: '2B',image: '/assets/img/default-avatar.png'},
    {first_name: 'Joel',last_name: 'Navarro Rivero',category: 'Olímpico',user_id: '5', target: '3A',image: '/assets/img/default-avatar.png'},
    {first_name: 'Joel',last_name: 'Navarro Rivero',category: 'Olímpico',user_id: '6', target: '3B',image: '/assets/img/default-avatar.png'},]
  }

}

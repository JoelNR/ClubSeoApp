import { Injectable } from '@angular/core';
import { CompetitionModel, GetCompetitionByIdApiResponse, GetCompetitionTargetByIdApiResponse, GetRecordsApiResponse, Records } from '../models/competition';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService extends Api {
  public competition(){
    return this.get<CompetitionModel[]>('/competitions/competitions.json')
  }

  public getCompetitionById(id: string){
      return this.get<GetCompetitionByIdApiResponse>('/competition/' + id)
  }

  public submitInscription(id: string, category: string, distance: number){
    return this.put<GetCompetitionByIdApiResponse>('/competition/' + id,{user_id: localStorage.getItem('user_id'), category, distance})
  }

  public submitPoints(id: string,user_id: string, points: number){
    return this.put<GetCompetitionByIdApiResponse>('/competition/points/' + id,{user_id, points})
  }

  public getCompetitionTargetById(id: string){
    return this.get<GetCompetitionTargetByIdApiResponse>('/target/' + id, {user_id: localStorage.getItem('user_id')})
  } 

  public getCompetitionTargetDataById(competition_id: string, user_id: string){
    return this.get<GetCompetitionTargetByIdApiResponse>('/target/' + competition_id, {user_id})
  } 

  public getClubRecords(){
    return this.get<Records[]>('/records/records.json')
  }

}

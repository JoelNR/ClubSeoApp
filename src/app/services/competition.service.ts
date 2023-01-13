import { Injectable } from '@angular/core';
import { GetCompetitionApiResponse, GetCompetitionByIdApiResponse, GetCompetitionTargetByIdApiResponse } from '../models/competition';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService extends Api {
  public competition(){
    return this.get<GetCompetitionApiResponse>('/competition')
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

}

import { Injectable } from '@angular/core';
import { GetCompetitionApiResponse, GetCompetitionByIdApiResponse } from '../models/competition';
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

}

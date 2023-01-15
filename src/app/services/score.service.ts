import { Injectable } from '@angular/core';
import { GetRoundApiResponse, GetRoundSetsApiResponse, GetScoreApiResponse, GetSetApiResponse, GetSetByIdApiResponse } from '../models/score';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService extends Api {
    public getSets(){
      return this.get<GetSetApiResponse>('/set', {user_id: localStorage.getItem('user_id')})
    }

    public getSetById(id: string){
      return this.get<GetSetByIdApiResponse>('/set/' + id)
    }

    public updateSet(id: string,user_id: string, arrows: string[],points:number){
      return this.put<GetSetApiResponse>('/set/update/' + id, {user_id, arrows, points})
    }

    public storeSet(userId: string, arrows: string[],points:number, round_id: string){
      return this.post<GetSetApiResponse>('/set/create/' + userId, {arrows, points, round_id})
    }

    public getRoundSets(round_id: string){
      return this.get<GetRoundSetsApiResponse>('/round/' + round_id)
    }

    public storeRound(userId: string, score_id: string){
      return this.post<GetRoundApiResponse>('/round/create/' + userId, {score_id})
    }

    public updateRound(id: string, points:number){
      return this.put<GetSetApiResponse>('/round/' + id, {points})
    }

    public updateScore(id: string, points:number){
      return this.put<GetSetApiResponse>('/score/' + id, {points})
    }

    public storeScore(userId: string, competition_id: string){
      return this.post<GetScoreApiResponse>('/score/create/' + userId, {competition_id})
    }

}

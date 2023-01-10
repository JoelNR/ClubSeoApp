import { Injectable } from '@angular/core';
import { GetSetApiResponse, GetSetByIdApiResponse } from '../models/score';
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

    public updateSet(id: string, arrows: string[],points:number){
        return this.put<GetSetApiResponse>('/set/update/' + id, {user_id: localStorage.getItem('user_id'), arrows, points})
    }

    public storeSet(userId: string, arrows: string[],points:number, round_id: string){
        return this.post<GetSetApiResponse>('/set/create/' + userId, {arrows, points, round_id})
    }

}
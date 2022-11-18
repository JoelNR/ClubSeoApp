import { Injectable } from '@angular/core';
import { GetNewsApiResponse, GetNewsByIdApiResponse } from '../models/news';
import { GetProfileApiResponse } from '../models/profile';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InitiationService extends Api {
    public getInitiation(){
      return this.get<any>('/initiation')
    }

    public addUserToInitiation(id: string, telephone: number){
        return this.put<any>('/initiation/' + id, {telephone, user_id: localStorage.getItem('user_id')})
      }

}

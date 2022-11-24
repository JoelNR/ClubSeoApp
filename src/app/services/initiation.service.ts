import { Injectable } from '@angular/core';
import { GetInitiationApiResponse, GetInitiationByIdApiResponse } from '../models/initiation';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InitiationService extends Api {
    public getInitiation(){
      return this.get<GetInitiationApiResponse>('/initiation')
    }

    public addUserToInitiation(id: string, attendees?: number){
        return this.put<GetInitiationByIdApiResponse>('/initiation/' + id, {user_id: localStorage.getItem('user_id'), attendees})
      }

}

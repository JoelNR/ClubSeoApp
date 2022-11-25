import { Injectable } from '@angular/core';
import { GetInitiationApiResponse, GetInitiationByIdApiResponse, SetInitiationByIdApiResponse } from '../models/initiation';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InitiationService extends Api {
    public getInitiation(){
      return this.get<GetInitiationApiResponse>('/initiation', {user_id: localStorage.getItem('user_id')})
    }

    public getInitiationById(id: string){
      return this.get<GetInitiationByIdApiResponse>('/initiation/' + id)
    }

    public addUserToInitiation(id: string, attendees?: number){
        return this.put<SetInitiationByIdApiResponse>('/initiation/' + id, {user_id: localStorage.getItem('user_id'), attendees})
    }

}

import { Injectable } from '@angular/core';
import { GetAllProfileApiResponse, GetProfileApiResponse, GetProfileCompetitionApiResponse } from '../models/profile';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends Api {
    public profile(userId: string){
      return this.get<GetProfileApiResponse>('/profile/' + userId)
    }

    public getProfileCompetition(userId: string){
      return this.get<GetProfileCompetitionApiResponse>('/profile/competition/' + userId)
    }

    public editProfile(first_name:string, last_name:string, category: string, email: string, telephone?: string){
      return this.put<any>('/profile/update/' + + localStorage.getItem('user_id'),{
        first_name,
        last_name,
        category,
        email,
        telephone
      })
    }

    public editProfilePhoto(image: FormData){
      return this.post<any>('/profile/update/photo/' + + localStorage.getItem('user_id'),{
        image
      })
    }

    public getAllMembers(){
      return this.get<GetAllProfileApiResponse>('/profiles')
    }
}


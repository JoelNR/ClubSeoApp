import { Injectable } from '@angular/core';
import { GetProfileApiResponse } from '../models/profile';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends Api {
    public profile(userId: string){
      return this.get<GetProfileApiResponse>('/profile/' + userId)
    }

    public editProfile(first_name:string, last_name:string, category: string, email: string, telephone?: string, image?: any){
      return this.put<any>('/profile/update/' + + localStorage.getItem('user_id'),{
        first_name,
        last_name,
        category,
        email,
        telephone,
        image
      })
    }

}


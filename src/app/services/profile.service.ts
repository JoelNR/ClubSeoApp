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
}


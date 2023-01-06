import { Injectable } from '@angular/core';
import { GetNewsApiResponse, GetNewsByIdApiResponse } from '../models/news';
import { GetProfileApiResponse } from '../models/profile';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends Api {
    public news(){
      return this.get<GetNewsApiResponse>('/news')
    }

    public firstNews(){
      return this.get<GetNewsApiResponse>('/firstnews')
    }

    public getNewsById(id: string){
        return this.get<GetNewsByIdApiResponse>('/news/' + id)
      }

}

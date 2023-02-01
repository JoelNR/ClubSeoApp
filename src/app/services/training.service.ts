import { Injectable } from '@angular/core';
import { GetTrainingApiResponse, StoreTrainingApiResponse } from '../models/training';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService extends Api {
    public getTrainings(){
      return this.get<GetTrainingApiResponse>('/training/' + localStorage.getItem('user_id'))
    }

    public storeTraining(modality: string, category: string, distance: number, title: string){
      return this.post<StoreTrainingApiResponse>('/training/create/' + localStorage.getItem('user_id'), {modality, category, distance, title})
    }
}

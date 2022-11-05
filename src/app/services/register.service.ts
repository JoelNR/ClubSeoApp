import { Injectable } from '@angular/core';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends Api {
    public registrate(email: string, password: string, name: string) {
        return this.post<any>('/register', {
            email,
            name,
            password
        })
    }
}


import { Injectable } from '@angular/core';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends Api {
    public csrfCookie(){
        return this.get<any>('/sanctum/csrf-cookie')
    }

    public registrate(email: string, password: string, firstName: string, lastName: string) {
        return this.post<any>('/register', {
            firstName,
            lastName,
            email,
            password
        })
    }

    public login(email:string, password: string){
        return this.post<any>('/login', {
            email,
            password
        })
    }
}


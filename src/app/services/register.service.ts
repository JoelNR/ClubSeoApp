import { Injectable } from '@angular/core';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends Api {
    public csrfCookie(){
        return this.get<any>('/sanctum/csrf-cookie')
    }

    public getUser(){
        return this.get<any>('/user')
    }

    public registrate(email: string, password: string, firstName: string, lastName: string) {
        return this.post<any>('/register', {
            firstName,
            lastName,
            email,
            password
        })
    }

    public forgotPassword(email:string){
        return this.post<any>('/forgot-password', {
            email
        })
    }

    public login(email:string, password: string){
        return this.post<any>('/login', {
            email,
            password
        })
    }

    public logoutFromApp() {
        return this.post<any>('/logout', {})
    }
}


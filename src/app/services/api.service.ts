
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api {
    protected host: string = 'https://8fbd-83-138-209-99.ngrok-free.app/api'
    private static token?: string = null;

    constructor(protected http: HttpClient) {
        if (Api.token === null && localStorage.getItem('seo-token')) {
            Api.token = localStorage.getItem('seo-token');
        }

    }

    public getHost() {
        return this.host;
    }

    public static getToken(): string {
        return Api.token || localStorage.getItem('seo-token');
    }

    /**
     * Replace the old id token both in Api's token property
     * and client's localStorage.
     */
    public static setToken(token: string): void {
        this.token = token
        localStorage.setItem('seo-token', token)
    }


    public logout() {
        Api.token = null;
        localStorage.removeItem('seo-token');
        localStorage.removeItem('user_id');
    }

    protected get<T>(endpoint: string, params?: HttpParams|{
        [param: string]: string | number | boolean | readonly (string | number | boolean)[];
    }) {
        return this.http.get<T>(this.host + endpoint, { params, headers: this.headers() });
    }

    protected post<T>(endpoint: string, body: any) {
        return this.pipes(
            this.http.post<T>(this.host + endpoint, body, { headers: this.headers() })
                .pipe(
                    shareReplay(),
                )
        );
    }

    protected put<T>(endpoint: string, body: any) {
        return this.http.put<T>(this.host + endpoint, body, { headers: this.headers() });
    }

    protected delete<T>(endpoint: string) {
        return this.http.delete<T>(this.host + endpoint, { headers: this.headers() });
    }

    protected patch<T>(endpoint: string, body: any) {
        return this.http.patch<T>(this.host + endpoint, body, { headers: this.headers() });
    }

    private headers(): { [key: string]: string } {
        const headers = {
            'Accept': 'application/json, text/plain, */*',
            "ngrok-skip-browser-warning": "69420",
        };
        headers['Authorization'] = `${Api.token}`;

        return headers;
    }

    private pipes<T>(observable: Observable<T>): Observable<T> {
        const pipes = [
            this.authenticateIfNeeded,
        ];

        for (const pipe of pipes) {
            pipe(observable);
        }

        return observable;
    }

    private authenticateIfNeeded<T>(observable: Observable<T>): void {
        observable.subscribe(response => {
            if ((response as any).data?.token) {
                Api.token = (response as any).data.token;
                localStorage.setItem('seo-token', Api.token);
            }
        });
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../user.module';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    //Made by Martijn Heeffer
    public currentUserSubject: String;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        if(this.isLoggedIn){
            this.currentUserSubject = localStorage.getItem("currentUser");
        }
    }

    public get currentUserValue(): String {
        return this.currentUserSubject;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login/`, { "username": username, "password":password });
    }

    register(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/user`, { "username": username, "password":password });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    public get isLoggedIn() : boolean{
        return localStorage.getItem("currentUser") != null;
    }
}
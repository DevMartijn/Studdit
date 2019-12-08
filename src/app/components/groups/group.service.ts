import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Group } from './group.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class GroupService{
    groups: Group[]

    constructor(private http: HttpClient) {
        console.log('UserService constructed');
        console.log(`Connected to ${environment.apiUrl}`);
    }

    public getGroups(): Observable<Group[]>{
        return this.http.get<any>(`${environment.apiUrl}/group`);
    }

    public getGroup(id : String): Observable<Group>{
        return this.http.get<any>(`${environment.apiUrl}/group/` + id);
    }

    //TO DO: change admin string
    public createGroup(name : String): Observable<any>{
        return this.http.post<any>(`${environment.apiUrl}/group`, { "name": name, "admin": localStorage.getItem('currentUser') });
    }

    public joinGroup(id : String): Observable<any>{
        return this.http.patch<any>(`${environment.apiUrl}/group/addUser`, { "userId": localStorage.getItem('currentUser'), "groupId": id });
    }

    public deleteGroup(id : String): Observable<any>{
        console.log(id);
        return this.http.delete<any>(`${environment.apiUrl}/group/` + id);
    }

    public getUsername(userId : String): Observable<any>{
        return this.http.get<any>(`${environment.apiUrl}/user/` + userId);
    }
}
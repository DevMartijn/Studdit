import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})

export class PostService{

    constructor(private http: HttpClient) {
        console.log('UserService constructed');
        console.log(`Connected to ${environment.apiUrl}`);
    }

    public createPost(groupId : String, content : String): Observable<any>{
        return this.http.post<any>(`${environment.apiUrl}/post/` + groupId, { "content" : content, "user": localStorage.getItem('currentUser') });
    }

    public getPostsByGroup(groupId : String): Observable<Post[]>{
        return this.http.get<any>(`${environment.apiUrl}/post/` + groupId);
    }
}
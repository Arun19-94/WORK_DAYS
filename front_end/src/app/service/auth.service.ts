import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {}
  currentUser(user: any): Observable<User> {
    console.warn("AAAAAAAAAAAA")
    console.warn(user)
    // return this.http.get<User>('../../assets/data/user.json')
    return this.http.post<any>('/api/user/',user)
  }
}

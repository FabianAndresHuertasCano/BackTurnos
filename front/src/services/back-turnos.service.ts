import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import { Activity } from 'src/models/Activity';

@Injectable({
  providedIn: 'root'
})
export class BackTurnosService {

  urlServer = ''

  constructor(
    private http: HttpClient,
  ) {
    this.urlServer = window.location.href;
   }

  getUsers(): Observable<any>{
    let endpoint = `${this.urlServer}user`;
    return this.http.get<any>(endpoint)
  }
  getUserById(
    id: number
  ): Observable<any>{
    let endpoint = `${this.urlServer}userById?id=${id}`;
    return this.http.get<any>(endpoint)
  }
  createUser(
    user: User
  ): Observable<any>{
    let endpoint = `${this.urlServer}user`;
    return this.http.post<any>(endpoint,user)
  }
  updateUser(
    user: User
  ): Observable<any>{
    let endpoint = `${this.urlServer}user`;
    return this.http.put<any>(endpoint,user)
  }

  getActivities(
    id: number
  ): Observable<any>{
    let endpoint = `${this.urlServer}activity?id=${id}`;
    return this.http.get<any>(endpoint)
  }
  getActivityById(
    id: number
  ): Observable<any>{
    let endpoint = `${this.urlServer}activityById?id=${id}`;
    return this.http.get<any>(endpoint)
  }
  createActivity(
    activity: Activity
  ): Observable<any>{
    let endpoint = `${this.urlServer}activity`;
    return this.http.post<any>(endpoint,activity)
  }
  updateActivity(
    activity: Activity
  ): Observable<any>{
    let endpoint = `${this.urlServer}activity`;
    return this.http.put<any>(endpoint,activity)
  }
}

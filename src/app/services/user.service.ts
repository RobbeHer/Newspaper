import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:44348/api/user"); 
  }

  getUsersOfType(type: string): Observable<User[]> {
    var re = / /gi; 
    type = type.replace(re, "%20");
    return this.http.get<User[]>("https://localhost:44348/api/user/users-of-type/" + type.toLowerCase()); 
  }

  getUser(userID: number): Observable<User> {
    return this.http.get<User>("https://localhost:44348/api/user/" + userID); 
  }

  addUser(user: User) {
    return this.http.post<User>("https://localhost:44348/api/user", user); 
  }

  updateUser(userID: number, user: User) {
    return this.http.put<User>("https://localhost:44348/api/user/" + userID, user); 
  }

  deleteUser(userID: number) {
    return this.http.delete<User>("https://localhost:44348/api/user/" + userID);
  }
}

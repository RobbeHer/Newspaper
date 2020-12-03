import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/user-login.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient) {}

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44348/api/user/authenticate", userLogin);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    if (localStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  } 

  getUserFromLocalStorage(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  getUserRole(): string {
    let user: User = this.getUserFromLocalStorage();
    if (user !== null) {
      return user.role.name;
    } else {
      return 'Guest';
    }
  }

  getUserId(): number {
    let user: User = this.getUserFromLocalStorage();
    if (user !== null) {
      return user.userID;
    } else {
      return 0;
    }
  }

  isUserOfType(type: string) {
    if (this.getUserRole() == type || type == "All") {
      return true;
    }
    else {
      return false;
    }
  }
}

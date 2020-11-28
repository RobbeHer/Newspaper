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
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  } 

  getUserRole(): string {
    let user: User = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      return user.role.name;
    } else {
      return 'Guest';
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

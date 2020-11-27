import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>("https://localhost:44348/api/role"); 
  }

  getRoleOfType(type: string): Observable<Role> {
    return this.http.get<Role>("https://localhost:44348/api/role/" + type.toLowerCase()); 
  }

  getRole(roleID: number): Observable<Role> {
    return this.http.get<Role>("https://localhost:44348/api/role/" + roleID); 
  }

  addRole(role: Role) {
    return this.http.post<Role>("https://localhost:44348/api/role", role); 
  }

  updateRole(roleID: number, role: Role) {
    return this.http.put<Role>("https://localhost:44348/api/role/" + roleID, role); 
  }

  deleteRole(roleID: number) {
    return this.http.delete<Role>("https://localhost:44348/api/role/" + roleID);
  }
}

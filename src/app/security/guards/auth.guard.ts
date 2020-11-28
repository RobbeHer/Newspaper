import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authenticateService: AuthenticateService, private router : Router) { } 

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authenticateService.isLoggedIn()) {
      let userAcces: string = (next.data.userAcces != null) ? next.data.userAcces : 'All';
      if (this._authenticateService.isUserOfType(userAcces)) {
        return true;
      } else {
        this.router.navigate(['/forbidden']);
      }
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    } 
    return false;
  }
  
}

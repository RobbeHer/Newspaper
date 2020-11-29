import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _authenticateService: AuthenticateService) { }

  logout(){
    this._authenticateService.logout();
    location.assign('/');
  }

  ngOnInit(): void {
  }

}

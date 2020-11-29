import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-journalist',
  templateUrl: './journalist.component.html',
  styleUrls: ['./journalist.component.scss']
})
export class JournalistComponent implements OnInit {

  constructor(private _authenticateService: AuthenticateService) { }

  logout(){
    this._authenticateService.logout();
    location.assign('/');
  }

  ngOnInit(): void {
  }

}

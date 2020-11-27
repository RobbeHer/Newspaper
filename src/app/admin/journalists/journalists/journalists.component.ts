import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-journalists',
  templateUrl: './journalists.component.html',
  styleUrls: ['./journalists.component.scss']
})
export class JournalistsComponent implements OnInit {

  journalists: Observable<User[]>;

  constructor(private _userService: UserService) {
    this.getJournalists();
  }

  getJournalists() {
    this.journalists = this._userService.getUsersOfType("journalist");
  }

  deleteHournalist(id: number) {
    this._userService.deleteUser(id).subscribe(() => {
      this.getJournalists();
    });
  }

  ngOnInit(): void {
  }

}

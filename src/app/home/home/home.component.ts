import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag.model';
import { User } from 'src/app/models/user.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  isLoggedIn: boolean = false;
  tags: Observable<Tag[]>;
  filter: string;
  submitted = false;
  filterForm = this.fb.group({
    filter: ['', Validators.required]
  });

  constructor(private router : Router,
    private _tagService: TagService, 
    private fb: FormBuilder, 
    private _activatedroute: ActivatedRoute,
    private _authenticateService: AuthenticateService) {
  }

  getTags() {
    this.tags = this._tagService.getTags();
  }

  onFormValueChanges() {
    this.filterForm.get('filter').valueChanges.subscribe(val => {
      this.filter = val;
    });
  }

  patchForm() {
    this.filterForm.patchValue({
      filter: ''
    });
  }

  onSubmit() {
    this.submitted = true;
    location.assign('/filter/' + this.filter);
    this.patchForm();
    this.submitted = false;
  }

  logout(){
    this._authenticateService.logout();
    this.isLoggedIn = false;
    location.assign('/');
  }

  ngOnInit(): void {
    this.onFormValueChanges();
    this.isLoggedIn = (this._authenticateService.isLoggedIn) ? true : false;
    if (this.isLoggedIn) {
      this.user = this._authenticateService.getUserFromLocalStorage();
    } else {
      this.user.firstName = 'e'
    }
    this.getTags();
  }

}

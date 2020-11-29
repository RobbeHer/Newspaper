import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-journalist-edit',
  templateUrl: './journalist-edit.component.html',
  styleUrls: ['./journalist-edit.component.scss']
})
export class JournalistEditComponent implements OnInit {

  journalist: User;
  submitted = false;
  journalistForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private _activatedroute:ActivatedRoute, private _router:Router, private _userService: UserService, private fb: FormBuilder) { }

  getJournalist(id: number) {
    this._userService.getUser(id).subscribe(journalist => {
      this.journalist = journalist; 
      this.patchForm();
    });
  }

  patchForm() {
    this.journalistForm.patchValue({
      firstName: this.journalist.firstName,
      lastName: this.journalist.lastName,
      email: this.journalist.email,
      username: this.journalist.username,
      password: this.journalist.password
    });
  }

  onFormValueChanges() {
    this.journalistForm.get('firstName').valueChanges.subscribe(val => {
      this.journalist.firstName = val;
    });
    this.journalistForm.get('lastName').valueChanges.subscribe(val => {
      this.journalist.lastName = val;
    });
    this.journalistForm.get('email').valueChanges.subscribe(val => {
      this.journalist.email = val;
    });
    this.journalistForm.get('username').valueChanges.subscribe(val => {
      this.journalist.username = val;
    });
    this.journalistForm.get('password').valueChanges.subscribe(val => {
      this.journalist.password = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._userService.updateUser(this.journalist.userID, this.journalist).subscribe(() => {
      location.assign("/admin/journalists");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
    this._activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getJournalist(id);
    });
  }
}

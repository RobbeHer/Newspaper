import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { RoleService } from 'src/app/services/role.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-journalist-add',
  templateUrl: './journalist-add.component.html',
  styleUrls: ['./journalist-add.component.scss']
})
export class JournalistAddComponent implements OnInit {

  journalist: User = new User();
  role: Role;
  submitted = false;
  journalistForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor( 
    private _userService: UserService, 
    private _roleService: RoleService, 
    private fb: FormBuilder) {
      this.getJournalistRoleID();
  }

  getJournalistRoleID() {
    this._roleService.getRoleOfType("journalist").subscribe(role => {
      this.role = role;
      this.journalist.roleID = this.role.roleID;
    });;
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
    this._userService.addUser(this.journalist).subscribe(() => {
      location.assign("/admin/journalists");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
  }
}

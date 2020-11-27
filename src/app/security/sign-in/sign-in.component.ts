import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Role } from 'src/app/models/role.model';
import { UserLogin } from 'src/app/models/user-login.model';
import { User } from 'src/app/models/user.model';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  newUser: User = new User();
  role: Role;
  submitted = false;
  signInForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor( 
    private _userService: UserService, 
    private _roleService: RoleService, 
    private _authenticateService: AuthenticateService,
    private fb: FormBuilder) {
      this.getUserRoleID();
  }

  getUserRoleID() {
    this._roleService.getRoleOfType("user").subscribe(role => {
      this.role = role;
      this.newUser.roleID = this.role.roleID;
    });;
  }

  onFormValueChanges() {
    this.signInForm.get('firstName').valueChanges.subscribe(val => {
      this.newUser.firstName = val;
    });
    this.signInForm.get('lastName').valueChanges.subscribe(val => {
      this.newUser.lastName = val;
    });
    this.signInForm.get('email').valueChanges.subscribe(val => {
      this.newUser.email = val;
    });
    this.signInForm.get('username').valueChanges.subscribe(val => {
      this.newUser.username = val;
    });
    this.signInForm.get('password').valueChanges.subscribe(val => {
      this.newUser.password = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._userService.addUser(this.newUser).subscribe(() => {
      location.assign("/login");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
  }
}

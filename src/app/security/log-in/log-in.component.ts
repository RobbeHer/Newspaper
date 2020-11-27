import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();
  submitted: boolean = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private _authenticateService : AuthenticateService, private fb: FormBuilder) { } 

  onFormValueChanges() {
    this.loginForm.get('username').valueChanges.subscribe(val => {
      this.userLogin.username = val;
    });
    this.loginForm.get('password').valueChanges.subscribe(val => {
      this.userLogin.password = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result));
    }); 
  }

  ngOnInit(): void {
    this.onFormValueChanges();
  }
}

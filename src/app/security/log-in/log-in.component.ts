import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

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
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _authenticateService : AuthenticateService, private fb: FormBuilder) { } 

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
      console.log(result);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result));
      let standardRoute = (result.role.name == 'User') ? '/' : result.role.name.toLocaleLowerCase();
      this.router.navigateByUrl((this.returnUrl != '/') ? this.returnUrl : standardRoute);
    }); 
  }

  ngOnInit(): void {
    this._authenticateService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.onFormValueChanges();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [LogInComponent, SignInComponent],
  imports: [
    CommonModule
  ]
})
export class SecurityModule { }

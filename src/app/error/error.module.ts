import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';



@NgModule({
  declarations: [PageNotFoundComponent, ForbiddenComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorModule { }

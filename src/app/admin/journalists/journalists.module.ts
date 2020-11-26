import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalistsComponent } from './journalists/journalists.component';
import { JournalistAddComponent } from './journalist-add/journalist-add.component';
import { JournalistEditComponent } from './journalist-edit/journalist-edit.component';



@NgModule({
  declarations: [JournalistsComponent, JournalistAddComponent, JournalistEditComponent],
  imports: [
    CommonModule
  ]
})
export class JournalistsModule { }

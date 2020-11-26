import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalistComponent } from './journalist/journalist.component';
import { ArticlesModule } from './articles/articles.module';



@NgModule({
  declarations: [JournalistComponent],
  imports: [
    CommonModule,
    ArticlesModule
  ]
})
export class JournalistModule { }

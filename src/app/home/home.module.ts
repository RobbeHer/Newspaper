import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [HomeComponent, ArticleComponent, IndexComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

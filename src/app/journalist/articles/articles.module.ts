import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';



@NgModule({
  declarations: [ArticlesComponent, ArticleAddComponent, ArticleEditComponent],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }

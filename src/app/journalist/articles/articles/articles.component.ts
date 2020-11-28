import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private _articleService: ArticleService, private _authenticateService: AuthenticateService) {
    this.getArticles();
  }

  getArticles() {
    let id: number = this._authenticateService.getUserId();
    this.articles = this._articleService.getArticlesOfUser(id);
  }

  deleteTag(id: number) {
    this._articleService.deleteArticle(id).subscribe(() => {
      this.getArticles();
    });
  }

  ngOnInit(): void {
  }

}

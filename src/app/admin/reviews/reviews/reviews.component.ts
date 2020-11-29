import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private _articleService: ArticleService, private _authenticateService: AuthenticateService) {
    this.getArticles();
  }

  getArticles() {
    let id: number = this._authenticateService.getUserId();
    this.articles = this._articleService.getArticlesOfStatus("To review");
  }

  ngOnInit(): void {
  }

}

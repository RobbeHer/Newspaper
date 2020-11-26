import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private _articleService: ArticleService) {
    this.getArticles();
  }

  getArticles() {
    this.articles = this._articleService.getArticles();
  }

  ngOnInit(): void {
  }

}

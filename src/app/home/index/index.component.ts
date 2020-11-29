import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private _articleService: ArticleService, private _activatedroute:ActivatedRoute, private _router:Router) {
  }

  getArticles() {
    this.articles = this._articleService.getPublishedArticles();
  }

  getArticlesWithTag(tag: string) {
    this.articles = this._articleService.getPublishedArticlesWithTag(tag);
  }

  ngOnInit(): void {
    this._activatedroute.params.subscribe(params => { 
      let tag = params['tag'];
      console.log(tag);
      if (tag === undefined || tag == "") {
        this.getArticles();
      } else {
        this.getArticlesWithTag(tag);
      }
    });
  }

}

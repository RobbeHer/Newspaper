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
  tag: string = "";
  filter: string = "";

  constructor(private _articleService: ArticleService, private _activatedroute:ActivatedRoute) {
  }

  getArticles() {
    this.articles = this._articleService.getPublishedArticles();
  }

  getArticlesWithTag(tag: string) {
    this.articles = this._articleService.getPublishedArticlesWithTag(tag);
  }

  getArticlesWithFilter(filter: string) {
    this.articles = this._articleService.getPublishedArticlesWithFilter(filter);
  }

  ngOnInit(): void {
    console.log('1')
    this._activatedroute.params.subscribe(params => { 
      let tag = params['tag'];
      let filter = params['filter'];
      console.log('tag: ' + tag)
      console.log('filter: ' + filter)
      if (tag !== undefined) {
        this.tag = tag;
        this.getArticlesWithTag(tag);
      } else if (filter !== undefined) {
        this.filter = filter;
        this.getArticlesWithFilter(filter);
      } else {
        this.getArticles();
      }
    });
  }

}

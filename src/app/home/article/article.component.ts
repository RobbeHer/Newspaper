import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article;
  sub;

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private _articleService: ArticleService) {}

  getArticle(id: number) {
    this._articleService.getArticle(id).subscribe(article => this.article = article);
  }

  ngOnInit() {
    this.sub = this._Activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      console.warn("https://localhost:44348/api/article/" + id);
      this.getArticle(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

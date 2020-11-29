import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleStatusService } from 'src/app/services/article-status.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  article: Article;
  submitted = false;

  constructor(private _Activatedroute:ActivatedRoute, 
    private _router:Router, 
    private _articleService: ArticleService, 
    private _articleStatusService: ArticleStatusService) {}

  getArticle(id: number) {
    this._articleService.getReviewArticle(id).subscribe(article => this.article = article);
  }

  approveArticle() {
    this._articleStatusService.getStatusIdOf("Published").subscribe(result => {
      this.article.articleStatusID = result.articleStatusID;
      this.onSubmit();
    })
  }

  declineArticle() {
    this._articleStatusService.getStatusIdOf("Need change").subscribe(result => {
      this.article.articleStatusID = result.articleStatusID;
      this.onSubmit();
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.article);
    this._articleService.updateArticle(this.article.articleID, this.article).subscribe(() => {
      location.assign("/admin/reviews");
    });;
  }

  ngOnInit() {
    this._Activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getArticle(id);
    });
  }
}

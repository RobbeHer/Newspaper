import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleComment } from 'src/app/models/article-comment.model';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleCommentService } from 'src/app/services/article-comment.service';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article;
  comments: Observable<ArticleComment[]>;
  submitted = false;
  isLoggedIn: boolean;
  comment: ArticleComment;
  messageForm = this.fb.group({
    message: ['', Validators.required]
  });

  constructor(private _Activatedroute:ActivatedRoute, 
    private _router:Router, 
    private _articleService: ArticleService,
    private _articleCommentService: ArticleCommentService,
    private _authenticateService: AuthenticateService,
    private fb: FormBuilder) {}

  getArticle(id: number) {
    this._articleService.getArticle(id).subscribe(article => {
      this.article = article
      this.getComments();
    });
  }

  getComments() {
    this.comments = this._articleCommentService.getArticleComments(this.article.articleID);
  }

  onFormValueChanges() {
    this.messageForm.get('message').valueChanges.subscribe(val => {
      this.comment.message = val;
    });
  }

  patchForm() {
    this.messageForm.patchValue({
      message: ''
    });
  }

  onSubmit() {
    this.submitted = true;
    this.comment.userID = this._authenticateService.getUserId();
    this.comment.articleID = this.article.articleID;
    this._articleCommentService.addComment(this.comment).subscribe(() => {
      this.patchForm();
      this.submitted = false;
      this.getComments();
    });
  }

  ngOnInit() {
    this.onFormValueChanges();
    this.isLoggedIn = this._authenticateService.isLoggedIn();
    if (this.isLoggedIn) {
      this.comment = new ArticleComment();
    }
    this._Activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getArticle(id);
    });
  }
}

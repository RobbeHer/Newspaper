import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { Tag } from 'src/app/models/tag.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { ArticleStatusService } from 'src/app/services/article-status.service';
import { ArticleService } from 'src/app/services/article.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  article: Article = new Article();
  tags: Observable<Tag[]>;
  submitted = false;
  isTagNotOk = true;
  articleForm = this.fb.group({
    title: ['', Validators.required],
    subTitle: ['', Validators.required],
    shortSummary: ['', Validators.required],
    body: ['', Validators.required],
    tagID: ['0', Validators.required]
  });

  constructor( 
    private _activatedroute:ActivatedRoute, 
    private _router:Router,
    private _articleService: ArticleService, 
    private _tagService: TagService, 
    private _articleStatusService: ArticleStatusService, 
    private _authenticateService: AuthenticateService,
    private fb: FormBuilder) {
      this.getTags();
  }

  getEditArticle(id: number) {
    this._articleService.getEditArticle(id).subscribe(article => {
      this.article = article; 
      this.patchForm();
    });
  }

  patchForm() {
    this.articleForm.patchValue({
      title: this.article.title,
      subTitle: this.article.subTitle,
      shortSummary: this.article.shortSummary,
      body: this.article.body,
      tagID: this.article.tagID
    });
  }

  getTags() {
    this.tags = this._tagService.getTags();
  }

  onFormValueChanges() {
    this.articleForm.get('title').valueChanges.subscribe(val => {
      this.article.title = val;
    });
    this.articleForm.get('subTitle').valueChanges.subscribe(val => {
      this.article.subTitle = val;
    });
    this.articleForm.get('shortSummary').valueChanges.subscribe(val => {
      this.article.shortSummary = val;
    });
    this.articleForm.get('body').valueChanges.subscribe(val => {
      this.article.body = val;
    });
    this.articleForm.get('tagID').valueChanges.subscribe(val => {
      console.log(val);
      this.article.tagID = parseInt(val);
      this.isTagNotOk = (parseInt(val) === 0) ? true : false;
    });
  }

  saveAsDraft() {
    this._articleStatusService.getStatusIdOf("Draft").subscribe(result => {
      this.article.articleStatusID = result.articleStatusID;
      this.onSubmit();
    });;
  }

  sendToReview() {
    this._articleStatusService.getStatusIdOf("To review").subscribe(result => {
      this.article.articleStatusID = result.articleStatusID;
      this.onSubmit();
    });;
  }

  onSubmit() {
    this.submitted = true;
    this.article.userID = this._authenticateService.getUserId();
    console.log(this.article);
    this._articleService.updateArticle(this.article.articleID, this.article).subscribe(() => {
      location.assign("/journalist/articles");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
    this._activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getEditArticle(id);
    });
  }

}

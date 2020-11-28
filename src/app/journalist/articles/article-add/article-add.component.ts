import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ArticleStatus } from 'src/app/models/article-status.model';
import { Article } from 'src/app/models/article.model';
import { Tag } from 'src/app/models/tag.model';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleStatusService } from 'src/app/services/article-status.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

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
    private _articleService: ArticleService, 
    private _tagService: TagService, 
    private _articleStatusService: ArticleStatusService, 
    private _authenticateService: AuthenticateService,
    private fb: FormBuilder) {
      this.getTags();
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
    this._articleService.addArticle(this.article).subscribe(() => {
      location.assign("/journalist/articles");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor'; 

import { HomeComponent } from 'src/app/home/home/home.component';
import { IndexComponent as HomeIndexComponent } from 'src/app/home/index/index.component';
import { ArticleComponent } from 'src/app/home/article/article.component';
import { SignInComponent } from 'src/app/security/sign-in/sign-in.component';
import { LogInComponent } from 'src/app/security/log-in/log-in.component';
import { JournalistComponent } from 'src/app/journalist/journalist/journalist.component';
import { ArticlesComponent } from 'src/app/journalist/articles/articles/articles.component';
import { ArticleAddComponent } from 'src/app/journalist/articles/article-add/article-add.component';
import { ArticleEditComponent } from 'src/app/journalist/articles/article-edit/article-edit.component';
import { AdminComponent } from 'src/app/admin/admin/admin.component';
import { ReviewsComponent } from 'src/app/admin/reviews/reviews/reviews.component';
import { ReviewComponent } from 'src/app/admin/reviews/review/review.component';
import { JournalistsComponent } from 'src/app/admin/journalists/journalists/journalists.component';
import { JournalistAddComponent } from 'src/app/admin/journalists/journalist-add/journalist-add.component';
import { JournalistEditComponent } from 'src/app/admin/journalists/journalist-edit/journalist-edit.component';
import { TagsComponent } from 'src/app/admin/tags/tags/tags.component';
import { TagAddComponent } from 'src/app/admin/tags/tag-add/tag-add.component';
import { TagEditComponent } from 'src/app/admin/tags/tag-edit/tag-edit.component';
import { PageNotFoundComponent } from 'src/app/error/page-not-found/page-not-found.component';
import { ForbiddenComponent } from 'src/app/error/forbidden/forbidden.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeIndexComponent,
    ArticleComponent,
    SignInComponent,
    LogInComponent,
    JournalistComponent,
    ArticlesComponent,
    ArticleAddComponent,
    ArticleEditComponent,
    AdminComponent,
    ReviewsComponent,
    ReviewComponent,
    JournalistsComponent,
    JournalistAddComponent,
    JournalistEditComponent,
    TagsComponent,
    TagAddComponent,
    TagEditComponent,
    PageNotFoundComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

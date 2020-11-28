import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ReviewComponent } from 'src/app/admin/review/review.component';
import { JournalistsComponent } from 'src/app/admin/journalists/journalists/journalists.component';
import { JournalistAddComponent } from 'src/app/admin/journalists/journalist-add/journalist-add.component';
import { JournalistEditComponent } from 'src/app/admin/journalists/journalist-edit/journalist-edit.component';
import { TagsComponent } from 'src/app/admin/tags/tags/tags.component';
import { TagAddComponent } from 'src/app/admin/tags/tag-add/tag-add.component';
import { TagEditComponent } from 'src/app/admin/tags/tag-edit/tag-edit.component';
import { PageNotFoundComponent } from 'src/app/error/page-not-found/page-not-found.component';
import { ForbiddenComponent } from 'src/app/error/forbidden/forbidden.component';
import { AuthGuard } from 'src/app/security/guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'article/:id', component: ArticleComponent, canActivate: [AuthGuard] },
      { path: '', component: HomeIndexComponent }
    ] 
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'journalist', component: JournalistComponent, canActivate: [AuthGuard], data: {userAcces: "Journalist"},
    children: [
      { path: 'articles', component: ArticlesComponent },
      { path: 'articles/add', component: ArticleAddComponent },
      { path: 'articles/edit/:id', component: ArticleEditComponent },
      { path: '', redirectTo:'articles', pathMatch:"full" }
    ] 
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {userAcces: "Admin"},
    children: [
      { path: 'reviews', component: ReviewComponent },
      { path: 'reviews/:id', component: ReviewComponent },
      { path: 'journalists', component: JournalistsComponent },
      { path: 'journalists/add', component: JournalistAddComponent },
      { path: 'journalists/edit/:id', component: JournalistEditComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'tags/add', component: TagAddComponent },
      { path: 'tags/edit/:id', component: TagEditComponent },
      { path: '', redirectTo:'reviews', pathMatch:"full" }
    ] 
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:44348/api/article"); 
  }

  getArticlesOfStatus(type: string): Observable<Article[]> {
    var re = / /gi; 
    type = type.replace(re, "%20");
    return this.http.get<Article[]>("https://localhost:44348/api/article/articles-of-status/" + type.toLowerCase()); 
  }

  getPublishedArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:44348/api/article/published-articles/"); 
  }

  getPublishedArticlesWithTag(tag: string): Observable<Article[]> {
    var re = / /gi; 
    tag = tag.replace(re, "%20");
    return this.http.get<Article[]>("https://localhost:44348/api/article/published-articles-with-tag/" + tag.toLowerCase()); 
  }

  getArticlesOfUser(id: number): Observable<Article[]> {
    return this.http.get<Article[]>("https://localhost:44348/api/article/articles-of-user/" + id); 
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>("https://localhost:44348/api/article/" + id); 
  }

  getEditArticle(id: number): Observable<Article> {
    return this.http.get<Article>("https://localhost:44348/api/article/edit/" + id); 
  }

  getReviewArticle(id: number): Observable<Article> {
    return this.http.get<Article>("https://localhost:44348/api/article/review/" + id); 
  }

  addArticle(article: Article) {
    return this.http.post<Article>("https://localhost:44348/api/article", article); 
  }

  updateArticle(articleID: number, article: Article) {
    return this.http.put<Article>("https://localhost:44348/api/article/" + articleID, article); 
  }

  deleteArticle(articleID: number) {
    return this.http.delete<Article>("https://localhost:44348/api/article/" + articleID);
  }
}

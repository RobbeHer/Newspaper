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

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>("https://localhost:44348/api/article/" + id); 
  }
}

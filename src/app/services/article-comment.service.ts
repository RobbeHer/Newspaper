import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleComment } from '../models/article-comment.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommentService {

  constructor(private http: HttpClient) { }

  getArticleComments(id: number): Observable<ArticleComment[]> {
    return this.http.get<ArticleComment[]>("https://localhost:44348/api/comment/article/" + id); 
  }

  addComment(comment: ArticleComment) {
    return this.http.post<ArticleComment>("https://localhost:44348/api/comment", comment); 
  }
}

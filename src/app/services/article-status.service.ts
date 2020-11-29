import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleStatus } from '../models/article-status.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleStatusService {

  constructor(private http: HttpClient) { }

  getArticlesStatuses(): Observable<ArticleStatus[]> {
    return this.http.get<ArticleStatus[]>("https://localhost:44348/api/articlestatus"); 
  }

  getStatusIdOf(name: string): Observable<ArticleStatus> {
    var re = / /gi; 
    name = name.replace(re, "%20");
    return this.http.get<ArticleStatus>("https://localhost:44348/api/articlestatus/status-id-of/" + name.toLocaleLowerCase()); 
  }
}

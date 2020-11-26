import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>("https://localhost:44348/api/tag"); 
  }

  getTag(id: number): Observable<Tag> {
    return this.http.get<Tag>("https://localhost:44348/api/tag/" + id); 
  }

  addTag(tag: Tag) {
    return this.http.post<Tag>("https://localhost:44348/api/tag", tag); 
  }

  updateTag(tagID: number, tag: Tag) {
    return this.http.put<Tag>("https://localhost:44348/api/tag/" + tagID, tag); 
  }

  deleteTag(tagID: number) {
    return this.http.delete<Tag>("https://localhost:44348/api/tag/" + tagID);
  }
}

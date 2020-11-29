import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tags: Observable<Tag[]>;

  constructor(private _tagService: TagService) {
  }

  getTags() {
    this.tags = this._tagService.getTags();
  }

  ngOnInit(): void {
    this.getTags();
  }

}

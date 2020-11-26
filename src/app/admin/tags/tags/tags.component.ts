import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Observable<Tag[]>;

  constructor(private _tagService: TagService) {
    this.getTags();
  }

  getTags() {
    this.tags = this._tagService.getTags();
  }

  deleteTag(id: number) {
    this._tagService.deleteTag(id).subscribe(() => {
      this.getTags();
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tag-add',
  templateUrl: './tag-add.component.html',
  styleUrls: ['./tag-add.component.scss']
})
export class TagAddComponent implements OnInit {

  tag: Tag;
  submitted = false;
  tagForm = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private _tagService: TagService, private fb: FormBuilder) { }

  onFormValueChanges() {
    this.tagForm.get('name').valueChanges.subscribe(val => {
      this.tag.name = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.tag);
    this._tagService.addTag(this.tag).subscribe(() => {
      location.assign("/admin/tags");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
    this.tag = new Tag(0, '');
  }

}

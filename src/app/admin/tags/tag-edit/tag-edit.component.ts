import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.scss']
})
export class TagEditComponent implements OnInit {

  tag: Tag;
  submitted = false;
  tagForm = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private _tagService: TagService, private fb: FormBuilder) { }

  getTag(id: number) {
    this._tagService.getTag(id).subscribe(tag => {
      this.tag = tag; 
      this.patchForm();
    });
  }

  patchForm() {
    this.tagForm.patchValue({
      name: this.tag.name
    });
  }

  onFormValueChanges() {
    this.tagForm.get('name').valueChanges.subscribe(val => {
      this.tag.name = val;
    });
  }

  onSubmit() {
    this.submitted = true;
    this._tagService.updateTag(this.tag.tagID, this.tag).subscribe(() => {
      location.assign("/admin/tags");
    });;
  }

  ngOnInit() {
    this.onFormValueChanges();
    this._Activatedroute.params.subscribe(params => { 
      let id = Number(params['id']);
      this.getTag(id);
    });
  }
}

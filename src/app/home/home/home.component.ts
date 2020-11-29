import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  filter: string;
  submitted = false;
  filterForm = this.fb.group({
    filter: ['', Validators.required]
  });

  constructor(private _tagService: TagService, private fb: FormBuilder, private _activatedroute: ActivatedRoute) {
  }

  getTags() {
    this.tags = this._tagService.getTags();
  }

  onFormValueChanges() {
    this.filterForm.get('filter').valueChanges.subscribe(val => {
      this.filter = val;
    });
  }

  patchForm() {
    this.filterForm.patchValue({
      filter: ''
    });
  }

  onSubmit() {
    this.submitted = true;
    location.assign('/filter/' + this.filter);
    this.patchForm();
    this.submitted = false;
  }

  ngOnInit(): void {
    this.onFormValueChanges();
    this.getTags();
  }

}

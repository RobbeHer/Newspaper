import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagAddComponent } from './tag-add/tag-add.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagsComponent } from './tags/tags.component';


@NgModule({
  declarations: [TagAddComponent, TagEditComponent, TagsComponent],
  imports: [
    CommonModule
  ]
})
export class TagsModule { }

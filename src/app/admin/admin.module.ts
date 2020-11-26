import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ReviewComponent } from './review/review.component';
import { JournalistsModule } from './journalists/journalists.module';
import { TagsModule } from './tags/tags.module';

@NgModule({
  declarations: [
    AdminComponent, 
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    JournalistsModule,
    TagsModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }

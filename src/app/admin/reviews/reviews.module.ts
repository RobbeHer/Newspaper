import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [ReviewsComponent, ReviewComponent],
  imports: [
    CommonModule
  ]
})
export class ReviewsModule { }

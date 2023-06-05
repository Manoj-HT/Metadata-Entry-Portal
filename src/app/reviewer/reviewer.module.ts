import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ReviewComponent } from './review/review.component';
import { ListComponent } from './list/list.component';
import { UserDataComponent } from './user-data/user-data.component';


@NgModule({
  declarations: [
    ReviewComponent,
    ListComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    ReviewerRoutingModule
  ]
})
export class ReviewerModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ReviewComponent } from './review/review.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    path : 'list',
    component : ListComponent
  },
  {
    path : 'review',
    component : ReviewComponent
  },
  {
    path : 'user-data',
    component : UserDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewerRoutingModule { }

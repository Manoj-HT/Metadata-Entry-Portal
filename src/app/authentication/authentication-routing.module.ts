import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUserDetailsComponent } from './get-user-details/get-user-details.component';

const routes: Routes = [
  {
    path : 'login', component : GetUserDetailsComponent
  },
  {
    path : '', redirectTo : 'login', pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

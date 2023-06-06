import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { GetUserDetailsComponent } from './get-user-details/get-user-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomainService } from '../services/domain.service';


@NgModule({
  declarations: [
    GetUserDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    HttpClientModule,
  ],
  providers: [DomainService],
})
export class AuthenticationModule { }

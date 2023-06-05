import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core/core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    CoreComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [CoreComponent],
})
export class CoreModule { }

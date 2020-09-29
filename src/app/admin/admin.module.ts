import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './post/index/index.component';


@NgModule({
  declarations: [HomeComponent, UserComponent, IndexComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

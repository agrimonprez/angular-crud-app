import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './post/index/index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'post', component: IndexComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

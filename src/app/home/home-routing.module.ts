import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersListComponent} from '../components/users-list/users-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: UsersListComponent},
    ])
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}

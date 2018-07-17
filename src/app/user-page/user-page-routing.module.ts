import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserPageComponent} from '../components/user-page/user-page.component';
import {UserResolverService} from '../services/resolvers/user-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: ':userName', component: UserPageComponent, resolve: {'user': UserResolverService}},
    ])
  ],
  exports: [RouterModule]
})

export class UserPageRoutingModule {
}

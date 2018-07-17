import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageModule} from './user-page/user-page.module';
import {HomeModule} from './home/home.module';
import {RepoPageModule} from './repo-page/repo-page.module';

const ROUTES: Routes = [
  {path: 'user', loadChildren: () => UserPageModule},
  {path: 'repo', loadChildren: () => RepoPageModule},
  {path: '', loadChildren: () => HomeModule},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

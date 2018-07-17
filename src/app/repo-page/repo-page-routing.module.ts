import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RepoPageComponent } from '../components/repo-page/repo-page.component';
import { RepoResolverService } from '../services/resolvers/repo-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: ':repoOwner/:repoName', component: RepoPageComponent, resolve: {'repo': RepoResolverService} },
    ])
  ],
  exports: [RouterModule]
})

export class RepoPageRoutingModule { }

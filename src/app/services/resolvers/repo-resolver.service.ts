import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GithubApiService} from '../github-api.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RepoResolverService {

  constructor(private githubApiService: GithubApiService) {
  }

  resolve(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log(router.params);
    return new Promise((resolve, reject) => {
      this.githubApiService.getRepositoryByOwnerAndName(router.params.repoOwner, router.params.repoName).subscribe((repo) => {
        resolve(repo);
      });
    });
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GithubApiService} from '../github-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService {

  constructor(private githubApiService: GithubApiService) {
  }

  resolve(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      this.githubApiService.getUserByName(router.params.userName).subscribe((user) => {
        resolve(user);
      }, error => reject(error));
    });
  }

}

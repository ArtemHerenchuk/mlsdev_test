import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

const API_URL = 'https://api.github.com/';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private _http: Http) {
  }

  getUsers(since: number, per_page: number): Observable<GithubApp.Profiles.ShortProfile[]> {
    return new Observable<GithubApp.Profiles.ShortProfile[]>(observer => {
      this._http.get(API_URL + 'users?since=' + since + '&per_page=' + per_page).subscribe((users) => {
        console.log(users.json());
        return observer.next(
          users.json().map((u) => {
            return {
              login: u.login || null,
              email: u.email || null,
              avatar_url: u.avatar_url || null,
              slug: u.login ? '/image' + u.login : null,
              id: u.id || null
            };
          })
        );
      }, () => {
        observer.complete();
      });
    });
  }

  getUserByName(userName: string): Observable<GithubApp.Profiles.ShortProfile> {
    return new Observable<GithubApp.Profiles.ShortProfile>(observer => {
      this._http.get(API_URL + 'users/' + userName).subscribe((user) => {
        const u = user.json();
        return observer.next(
          {
            login: u.login || null,
            email: u.email || null,
            avatar_url: u.avatar_url || null,
            slug: '/image' + u.login || null,
            name: u.name || null
          }
        );
      }, () => {
        observer.complete();
      });
    });
  }

  getRepositoriesByUserName(userName: string): Observable<GithubApp.Repositories.ShortRepository[]> {
    return new Observable<GithubApp.Repositories.ShortRepository[]>(observer => {
      this._http.get(API_URL + 'users/' + userName + '/repos').subscribe((repos) => {
        return observer.next(
          repos.json().map((r) => {
            return {
              name: r.name || null,
              owner: r.owner.login || null
            };
          })
        );
      }, () => {
        observer.complete();
      });
    });
  }

  getRepositoryByOwnerAndName(repoOwner: string, repoName: string): Observable<GithubApp.Repositories.ShortRepository> {
    return new Observable<GithubApp.Repositories.ShortRepository>(observer => {
      this._http.get(API_URL + 'repos/' + repoOwner + '/' + repoName).subscribe((repos) => {
        const r = repos.json();
        return observer.next(
          {
            name: r.name || null,
            owner: r.owner.login
          }
        );
      }, () => {
        observer.complete();
      });
    });
  }

  getCommitsByRepositoryOwnerAndName(repoOwner: string, repoName: string): Observable<GithubApp.Repositories.Commit[]> {
    return new Observable<GithubApp.Repositories.Commit[]>(observer => {
      this._http.get(API_URL + 'repos/' + repoOwner + '/' + repoName + '/commits').subscribe((commits) => {
        return observer.next(
          commits.json().map((c) => {
            return {
              name: c.sha || null,
              link: c.html_url || null
            };
          })
        );
      }, () => {
        observer.complete();
      });
    });
  }

  getForksByRepositoryOwnerAndName(repoOwner: string, repoName: string): Observable<GithubApp.Repositories.Fork[]> {
    return new Observable<GithubApp.Repositories.Fork[]>(observer => {
      this._http.get(API_URL + 'repos/' + repoOwner + '/' + repoName + '/forks').subscribe((forks) => {
        return observer.next(
          forks.json().map((f) => {
            return {
              name: f.full_name || null,
              link: f.html_url || null
            };
          })
        );
      }, () => {
        observer.complete();
      });
    });
  }
}

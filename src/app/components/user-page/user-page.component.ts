import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubApiService} from '../../services/github-api.service';
import {slideToLeft} from '../../services/animations/router.animations';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class UserPageComponent implements OnInit {
  profile: GithubApp.Profiles.Profile = {
    user: null,
    repositories: null
  };

  constructor(private activatedRoute: ActivatedRoute, private githubApiService: GithubApiService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((routeData) => {
      this.profile.user = routeData['user'];
      this.getRepositories();
    }, (error) => console.log(error));
  }

  getRepositories() {
    this.githubApiService.getRepositoriesByUserName(this.profile.user.login)
      .subscribe((repos: GithubApp.Repositories.ShortRepository[]) => {
        this.profile.repositories = repos;
      }, (error) => console.log(error));
  }
}

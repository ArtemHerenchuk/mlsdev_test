import { Component, OnInit } from '@angular/core';
import {GithubApiService} from '../../services/github-api.service';
import {ActivatedRoute} from '@angular/router';
import {slideToLeft} from '../../services/animations/router.animations';


@Component({
  selector: 'app-repo-page',
  templateUrl: './repo-page.component.html',
  styleUrls: ['./repo-page.component.scss'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class RepoPageComponent implements OnInit {
  repository: GithubApp.Repositories.Repository = {
    repository: null,
    forks: null
  };

  constructor(private activatedRoute: ActivatedRoute, private githubApiService: GithubApiService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((routeData) => {
      this.repository.repository = routeData['repo'];
      this.getRepository();
    }, (error) => console.log(error));
  }

  getRepository() {
    this.githubApiService
      .getForksByRepositoryOwnerAndName(this.repository.repository.owner, this.repository.repository.name)
      .subscribe((forks) => {
        this.repository.forks = forks;
      }, (error) => console.log(error));
  }
}

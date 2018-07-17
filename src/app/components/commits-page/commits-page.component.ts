import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { ActivatedRoute } from '@angular/router';
import {slideToLeft} from '../../services/animations/router.animations';

@Component({
  selector: 'app-commits-page',
  templateUrl: './commits-page.component.html',
  styleUrls: ['./commits-page.component.scss'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class CommitsPageComponent implements OnInit {
  commits: GithubApp.Repositories.Commit[];

  constructor(private activatedRoute: ActivatedRoute, private githubApiService: GithubApiService) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((routeData) => {
      this.getCommits(routeData['repo']);
    }, (error) => console.log(error));
  }

  getCommits(repo) {
    this.githubApiService.getCommitsByRepositoryOwnerAndName(repo.owner, repo.name)
      .subscribe((commits: GithubApp.Repositories.Commit[]) => {
        this.commits = commits;
      }, (error) => console.log(error));
  }
}

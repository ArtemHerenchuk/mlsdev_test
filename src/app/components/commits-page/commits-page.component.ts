import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commits-page',
  templateUrl: './commits-page.component.html',
  styleUrls: ['./commits-page.component.scss']
})
export class CommitsPageComponent implements OnInit {
  commits = [];

  constructor(private activatedRoute: ActivatedRoute, private githubApiService: GithubApiService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((routeData) => {
      console.log(routeData['repo'].json());
      this.githubApiService.getCommitsByRepositoryOwnerAndName(routeData['repo'].json().owner.login, routeData['repo'].json().name)
        .subscribe((commits) => {
        this.commits = commits.json();
        console.log(this.commits);
      });
    });
  }

}

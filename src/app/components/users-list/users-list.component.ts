import { Component, OnInit } from '@angular/core';
import {GithubApiService} from '../../services/github-api.service';
import {slideToLeft} from '../../services/animations/router.animations';

const USERS_TO_SHOW = 30;

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class UsersListComponent implements OnInit {
  users: GithubApp.Profiles.ShortProfile[] = [];
  _isDisplayShowMoreButton: boolean;

  constructor(private githubApiService: GithubApiService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    const since = this.users.length ? this.users[this.users.length - 1].id : 0;
    this.githubApiService.getUsers(since, USERS_TO_SHOW).subscribe(users => {
      this.users = this.users.concat(users);
      this._isDisplayShowMoreButton = !!this.users.length && this.users.length % USERS_TO_SHOW === 0;
    }, (error) => console.log(error));
  }
}

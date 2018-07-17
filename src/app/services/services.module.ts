import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {GithubApiService} from './github-api.service';
import {UserResolverService} from './resolvers/user-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    GithubApiService,
    UserResolverService,
  ]
})
export class ServicesModule {
  public static forRoot() {
    return {
      ngModule: ServicesModule
    };
  }
}

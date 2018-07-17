import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RepoPageRoutingModule} from './repo-page-routing.module';
import {RepoPageComponent} from '../components/repo-page/repo-page.component';
import {ServicesModule} from '../services/services.module';
import {CommitsPageComponent} from '../components/commits-page/commits-page.component';

@NgModule({
  imports: [
    CommonModule,
    RepoPageRoutingModule,
    ServicesModule
  ],
  declarations: [
    RepoPageComponent,
    CommitsPageComponent
  ]
})
export class RepoPageModule { }

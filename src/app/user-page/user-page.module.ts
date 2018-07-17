import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPageRoutingModule} from './user-page-routing.module';
import {RouterModule} from '@angular/router';

import {UserPageComponent} from '../components/user-page/user-page.component';
import {ServicesModule} from '../services/services.module';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    UserPageRoutingModule,
    PipesModule,
    RouterModule
  ],
  declarations: [
    UserPageComponent
  ]
})
export class UserPageModule { }

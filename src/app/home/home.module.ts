import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {ServicesModule} from '../services/services.module';

import {UsersListComponent} from '../components/users-list/users-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {UserComponent} from '../components/users-list/user/user.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ServicesModule,
    HomeRoutingModule,
    PipesModule
  ],
  declarations: [
    UsersListComponent,
    UserComponent
  ]
})
export class HomeModule { }

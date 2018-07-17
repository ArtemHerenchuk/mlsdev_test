import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {ServicesModule} from './services/services.module';
import {HomeModule} from './home/home.module';
import {UserPageModule} from './user-page/user-page.module';
import {SharedModule} from './shared/shared.module';

import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ServicesModule.forRoot(),
    SharedModule,
    HomeModule,
    UserPageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

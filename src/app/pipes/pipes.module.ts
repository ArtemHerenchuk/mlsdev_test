import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayUserDataPipe} from './display-user-data.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DisplayUserDataPipe
  ],
  exports: [
    DisplayUserDataPipe
  ]
})
export class PipesModule {
}

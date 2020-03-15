import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeasonPage } from './season';

@NgModule({
  declarations: [
    SeasonPage,
  ],
  imports: [
    IonicPageModule.forChild(SeasonPage),
  ],
})
export class SeasonPageModule {}

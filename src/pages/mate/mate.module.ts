import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatePage } from './mate';

@NgModule({
  declarations: [
    MatePage,
  ],
  imports: [
    IonicPageModule.forChild(MatePage),
  ],
})
export class MatePageModule {}

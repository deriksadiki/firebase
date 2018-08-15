import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppagePage } from './shoppage';

@NgModule({
  declarations: [
    ShoppagePage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppagePage),
  ],
})
export class ShoppagePageModule {}

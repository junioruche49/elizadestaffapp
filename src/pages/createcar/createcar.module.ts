import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatecarPage } from './createcar';

@NgModule({
  declarations: [
    CreatecarPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatecarPage),
  ],
})
export class CreatecarPageModule {}

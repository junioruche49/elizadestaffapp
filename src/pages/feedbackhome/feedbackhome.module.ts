import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackhomePage } from './feedbackhome';

@NgModule({
  declarations: [
    FeedbackhomePage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackhomePage),
  ],
})
export class FeedbackhomePageModule {}

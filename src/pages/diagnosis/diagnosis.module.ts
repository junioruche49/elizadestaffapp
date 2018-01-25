import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagnosisPage } from './diagnosis';

@NgModule({
  declarations: [
    DiagnosisPage,
  ],
  imports: [
    IonicPageModule.forChild(DiagnosisPage),
  ],
})
export class DiagnosisPageModule {}

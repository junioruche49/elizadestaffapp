import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehiclemodelsPage } from './vehiclemodels';

@NgModule({
  declarations: [
    VehiclemodelsPage,
  ],
  imports: [
    IonicPageModule.forChild(VehiclemodelsPage),
  ],
})
export class VehiclemodelsPageModule {}

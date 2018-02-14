import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { formsService } from '../../service/formsService.service';
import { Vehiclemodel } from '../../models/vehiclemodel.model';
import { Vehicle } from '../../service/vehicle.service'
import { ViewvehiclehomePage } from '../viewvehiclehome/viewvehiclehome'

/**
 * Generated class for the ShowvehiclehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showvehiclehome',
  templateUrl: 'showvehiclehome.html',
})
export class ShowvehiclehomePage {
  vehicles: Vehiclemodel[];
  newvehicles: Vehiclemodel[];
  title: Vehiclemodel

  constructor(public navCtrl: NavController,
  			 public navParams: NavParams,
  			  public formservice: formsService,
          	  public vehicle: Vehicle,) {
    this.vehicles = this.vehicle.car;
  	this.newvehicles  = this.vehicles.filter(this.findall(this.navParams.get('id')));
  	this.title = this.vehicles.find(this.findall(this.navParams.get('id')));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowvehiclehomePage');
  }

  findall(arg) {
  	// body...
  	return function findModel(model) { 
     return model.modelId === arg;
  }

  }

  gotoPage(vehicle: Vehiclemodel){
  	this.navCtrl.push(ViewvehiclehomePage, {vehicle: vehicle})
  }

}

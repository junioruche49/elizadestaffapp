import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, style, animate, transition } from '@angular/animations';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'
import { ProductPage } from '../product/product'
import { User } from '../../models/user.model'
import { Users } from '../../service/user.service';
import { Saloon } from '../../models/saloon.model';
import { suv } from '../../models/suv.model'
import { utility } from '../../models/utility.model'
import { Vehiclemodel } from '../../models/vehiclemodel.model';
import { Vehicle } from '../../service/vehicle.service'
import { ShowvehiclehomePage } from '../showvehiclehome/showvehiclehome'
import { Sparepartquotation } from '../../models/sparepartquotation.model'
import { SpareparthomePage } from '../spareparthome/spareparthome'

/**
 * Generated class for the VehiclemodelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehiclemodels',
  templateUrl: 'vehiclemodels.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('0.6s ease-out', style({opacity: 1}))
        ]),
        transition(':leave', [
          animate('0.3s ease-out', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class VehiclemodelsPage {

	products : Products[] = [];
	prod_idex: Products;
	data = true;
	User: User;
	length = 0;
  saloon: Saloon[];
  element: any;
  suv: suv[];
  utility: utility[];
  spareparts: Sparepartquotation[];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public product: Productservice,
  			  public users: Users,
          public vehicle: Vehicle) {
    this.saloon = this.vehicle.saloon;
    this.suv = this.vehicle.suv
    this.utility = this.vehicle.utility
    this.spareparts = this.vehicle.sparepart
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclemodelsPage');
  }

  showvehicle(id: any){
    this.navCtrl.push(ShowvehiclehomePage, {id: id})
  }


  showdetail(data){
    if (data == 'appointment') {
      this.element = 'appointment'
    }else if (data == 'repair') {
      this.element = 'repair'
    }else if (data == 'general') {
      this.element = 'general'
    }else if (data == 'spareparts') {
      this.element = 'spareparts'
    }
  }

  showsparepart(part: Sparepartquotation){
    this.navCtrl.push(SpareparthomePage, {part: part});
  }























}

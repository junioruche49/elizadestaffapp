import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sparepartquotation } from '../../models/sparepartquotation.model'
import { Vehicle } from '../../service/vehicle.service'
import { SparepartPage } from '../sparepart/sparepart'

/**
 * Generated class for the SparepartviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sparepartview',
  templateUrl: 'sparepartview.html',
})
export class SparepartviewPage {

  spareparts: Sparepartquotation[];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          	  public vehicle: Vehicle) {
    this.spareparts = this.vehicle.sparepart
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SparepartviewPage');
  }

  showsparepart(part: Sparepartquotation){
    this.navCtrl.push(SparepartPage, {part: part});
  }

}

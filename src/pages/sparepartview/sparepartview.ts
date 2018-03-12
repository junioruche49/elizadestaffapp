import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sparepartquotation } from '../../models/sparepartquotation.model'
import { Vehicle } from '../../service/vehicle.service'
import { Users } from '../../service/user.service';
import { User } from '../../models/user.model'
import { SparepartPage } from '../sparepart/sparepart'
import { SpareparthomePage } from '../spareparthome/spareparthome'

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
  user : User;
  spareparts: Sparepartquotation[];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          	  public vehicle: Vehicle,
              public users: Users) {
    this.spareparts = this.vehicle.sparepart
    this.user = this.users.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SparepartviewPage');
  }

  showsparepart(part: Sparepartquotation){
    if (this.user) {
    this.navCtrl.push(SparepartPage, {part: part});
        
    }else{
    this.navCtrl.push(SpareparthomePage, {part: part});
      
    }
  }

}

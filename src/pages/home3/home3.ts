import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup'
import { SigninPage } from '../signin/signin'
import { VehiclemodelsPage } from '../vehiclemodels/vehiclemodels'
import { FeedbackhomePage } from '../feedbackhome/feedbackhome'
import { SparepartviewPage } from '../sparepartview/sparepartview'
import { ServicehomePage } from '../servicehome/servicehome'
import { VehiclerecoveryPage } from '../vehiclerecovery/vehiclerecovery'

/**
 * Generated class for the Home4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home3',
  templateUrl: 'home3.html',
})
export class Home3Page {
	signin = SigninPage
	signup = SignupPage
	vehiclemodel = VehiclemodelsPage
	feedback = FeedbackhomePage;
  sparepart = SparepartviewPage;
  services = ServicehomePage
  vehiclerecovery = VehiclerecoveryPage

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home4Page');
  }

  gotoPage(page: any){
  	this.navCtrl.push(page);
  }

}

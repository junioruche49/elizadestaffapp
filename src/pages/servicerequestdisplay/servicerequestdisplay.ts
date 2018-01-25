import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { formsService } from '../../service/formsService.service';
import { Diagnosis } from '../../models/diagnosis.model'

/**
 * Generated class for the ServicerequestdisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicerequestdisplay',
  templateUrl: 'servicerequestdisplay.html',
})
export class ServicerequestdisplayPage {
	servicerequests: Diagnosis;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.servicerequests = this.navParams.get('servicerequests');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicerequestdisplayPage');
  }

}

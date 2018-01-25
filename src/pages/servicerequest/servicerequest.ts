import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { formsService } from '../../service/formsService.service';
import { Diagnosis } from '../../models/diagnosis.model'
import { ServicerequestdisplayPage } from '../servicerequestdisplay/servicerequestdisplay'

/**
 * Generated class for the ServicerequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicerequest',
  templateUrl: 'servicerequest.html',
})
export class ServicerequestPage {
	servicerequests: Diagnosis[] = [];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formsservice: formsService) {
  	this.servicerequests = this.formsservice.getDiagnosis();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicerequestPage');
  }

  servicerequestpage(index: Diagnosis){
  	this.navCtrl.push(ServicerequestdisplayPage, {servicerequests: index})
  }


}

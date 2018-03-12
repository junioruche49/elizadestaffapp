import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiagnosisPage } from '../diagnosis/diagnosis';
import { BodyworkPage } from '../bodywork/bodywork';
import { ServicePage } from '../service/service';
import { MechanicalrepairPage } from '../mechanicalrepair/mechanicalrepair';
import { MaintenancePage } from '../maintenance/maintenance'

/**
 * Generated class for the ServicehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicehome',
  templateUrl: 'servicehome.html',
})
export class ServicehomePage {
	diagnosis = DiagnosisPage;
	bodywork = BodyworkPage;
	service = ServicePage;
	mechanicalrepair = MechanicalrepairPage;
	MaintenancePage = MaintenancePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicehomePage');
  }

}

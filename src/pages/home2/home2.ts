import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowroomPage } from '../showroom/showroom';
import { SchedulePage } from '../schedule/schedule';
import { SalesexecutivePage } from '../salesexecutive/salesexecutive';
import { DiagnosisPage } from '../diagnosis/diagnosis';
import { BodyworkPage } from '../bodywork/bodywork';
import { ServicePage } from '../service/service';
import { MechanicalrepairPage } from '../mechanicalrepair/mechanicalrepair';
import { ProductsPage } from '../products/products';
import { QuotationPage } from '../quotation/quotation';
import { FeedbackPage } from '../feedback/feedback'
import { SparepartviewPage } from '../sparepartview/sparepartview'

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
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
export class Home2Page {

	showroom = ShowroomPage;
	schedule = SchedulePage;
	salesexecutive = SalesexecutivePage;
	diagnosis = DiagnosisPage;
	bodywork = BodyworkPage;
	service = ServicePage;
	mechanicalrepair = MechanicalrepairPage;
	products = ProductsPage;
	quotation = QuotationPage;
	feedback = FeedbackPage;
	data = true;
	element: any;
  sparepart = SparepartviewPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

  showdetail(data){
  	if (data == 'appointment') {
  		this.element = 'appointment'
  	}else if (data == 'repair') {
  		this.element = 'repair'
  	}else if (data == 'general') {
  		this.element = 'general'
  	}
  }

  feedbackpage(){
  	this.element = '';
  	this.navCtrl.push(FeedbackPage);
  }

}

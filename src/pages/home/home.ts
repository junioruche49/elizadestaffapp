import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { ShowroomPage } from '../showroom/showroom';
import { SchedulePage } from '../schedule/schedule';
import { SalesexecutivePage } from '../salesexecutive/salesexecutive';
import { DiagnosisPage } from '../diagnosis/diagnosis';
import { BodyworkPage } from '../bodywork/bodywork';
import { ServicePage } from '../service/service';
import { MechanicalrepairPage } from '../mechanicalrepair/mechanicalrepair';
import { ProductsPage } from '../products/products';
import { QuotationPage } from '../quotation/quotation';
import { AuthPage } from '../../service/authpage'
import { Users } from '../../service/user.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
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
export class HomePage {
	showroom = ShowroomPage;
	schedule = SchedulePage;
	salesexecutive = SalesexecutivePage;
	diagnosis = DiagnosisPage;
	bodywork = BodyworkPage;
	service = ServicePage;
	mechanicalrepair = MechanicalrepairPage;
	products = ProductsPage;
	quotation = QuotationPage;
	data = true;
	element: any;

  constructor(public navCtrl: NavController, public authpage: AuthPage) {
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
  
  

}

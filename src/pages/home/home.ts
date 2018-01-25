import { Component } from '@angular/core';
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
  templateUrl: 'home.html'
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

  constructor(public navCtrl: NavController, public authpage: AuthPage, public user: Users) {
  	this.authpage.showauth();
  }


  
  

}

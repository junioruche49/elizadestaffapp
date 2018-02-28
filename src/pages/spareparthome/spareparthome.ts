import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Sparepartquotation } from '../../models/sparepartquotation.model'
import { Usersadded } from '../../models/users.model'
import { alertData } from '../../models/alertdata.model'
import { User } from '../../models/user.model'
import { Users } from '../../service/user.service';
import { formsService } from '../../service/formsService.service';
import { QuotationPage } from '../../pages/quotation/quotation'
import { Home3Page } from '../home3/home3'

/**
 * Generated class for the SpareparthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spareparthome',
  templateUrl: 'spareparthome.html',
})
export class SpareparthomePage {
  sparepart: Sparepartquotation;
	quote: boolean = false;
	usersadded: Usersadded[] = [];
	usersdata: alertData;
	user : User;
	selecteduser: any;

  constructor(public navCtrl: NavController, 
  			public navParams: NavParams,
  			  public users: Users,
  			  public formservice: formsService,
  			  private alertCtrl: AlertController,
  			  public toast: ToastController) {
  	this.sparepart = this.navParams.get('part');
  	this.usersadded = this.users.getUsers();
	    this.user = this.users.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpareparthomePage');
  }

  showform(){
  	this.quote = true;
  } 

  addquotation(form: NgForm){
  	let prompt = this.alertCtrl.create({
      title: 'Contact',
      message: "Please Enter your contact information",
      inputs: [
        {
          name: 'title',
          placeholder: 'Phone Number or Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
          	this.navCtrl.push(Home3Page);
          }
        }
      ]
    });
    prompt.present();
  }

}

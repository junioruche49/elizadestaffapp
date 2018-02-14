import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Home3Page } from '../home3/home3'

/**
 * Generated class for the FeedbackhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedbackhome',
  templateUrl: 'feedbackhome.html',
})
export class FeedbackhomePage {

	call = 'yes'

  constructor(public navCtrl: NavController, 
  			public navParams: NavParams,
  			public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackhomePage');
  }

  submit(){
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

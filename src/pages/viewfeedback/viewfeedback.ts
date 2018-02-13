import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { formsService } from '../../service/formsService.service';
import { Feedback } from '../../models/feedback.model'

/**
 * Generated class for the ViewfeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewfeedback',
  templateUrl: 'viewfeedback.html',
})
export class ViewfeedbackPage {
	feedback: Feedback;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService) {
  	this.feedback = this.navParams.get('feedback')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewfeedbackPage');
  }

}

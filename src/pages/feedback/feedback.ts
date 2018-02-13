import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms'
import { formsService } from '../../service/formsService.service';
import { Feedback } from '../../models/feedback.model'
import { FeedbackviewPage } from '../feedbackview/feedbackview'

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
	call = 'yes'

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  submit(form: NgForm){
  	if (form.value.suggestion) {
  		// code...
  		this.formservice.addFeedback({suggestion: form.value.suggestion})
  	}else{
  		this.formservice.addFeedback({vehicle_model: form.value.vehicle_model,
  									  vehicle_type: form.value.vehicle_type,
  									  complain: form.value.complain,
  									 contact: form.value.contact})
  	}
  	console.log(this.formservice.getFeedback())
  	this.navCtrl.setRoot(FeedbackviewPage)
  }

}

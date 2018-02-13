import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewfeedbackPage } from '../viewfeedback/viewfeedback'
import { formsService } from '../../service/formsService.service';
import { Feedback } from '../../models/feedback.model'

/**
 * Generated class for the FeedbackviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedbackview',
  templateUrl: 'feedbackview.html',
})
export class FeedbackviewPage {
	feedback: Feedback[];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService) {
  	this.feedback = this.formservice.getFeedback();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackviewPage');
  }

  viewfeedback(feed: Feedback){
  	this.navCtrl.push(ViewfeedbackPage, {feedback: feed})
  }

}

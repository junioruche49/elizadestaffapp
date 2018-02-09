import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewfeedbackPage } from '../viewfeedback/viewfeedback'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackviewPage');
  }

  viewfeedback(){
  	this.navCtrl.push(ViewfeedbackPage)
  }

}

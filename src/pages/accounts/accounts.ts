import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Usersadded } from '../../models/users.model'
import { Users } from '../../service/user.service';

/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {
	users: Usersadded[] = []

  constructor(public navCtrl: NavController, 
  		      public navParams: NavParams,
  		      public viewCtrl: ViewController,
  		      public Users: Users) {
  	this.users = this.Users.getUsers()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsPage');
  }

  closemodal(){
  	this.viewCtrl.dismiss();
  }

}

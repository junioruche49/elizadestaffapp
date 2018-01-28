import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, 
              private http: HttpClient,
              public toast: ToastController,
              public loading: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  singin(){
  	this.navCtrl.popToRoot();
  }
  submit(form: NgForm){
    if (form.value.password != form.value.confirmpassword) {
      this.toast.create({
                    message: 'Passwords fields must match',
                    duration: 2500,
                    position: 'bottom'
                  }).present()
    }else{
      const loading = this.loading.create({
        content: 'Loading...'
      })
      loading.present()
    this.http.post('http://elizade.ebukaokwuokenye.com/api/login', {email: form.value.email, 
                                                                    password: form.value.password, 
                                                                    Customer_number: form.value.customer_number})
    .subscribe((data: any) => {
                if (data.success == false) {
                  loading.dismiss()
                  this.toast.create({
                    message: data.message,
                    duration: 2500,
                    position: 'bottom'
                  }).present()
                }else{
                  loading.dismiss()
                  this.toast.create({
                    message: data.message,
                    duration: 2500,
                    position: 'bottom'
                  }).present()
                }
                       }, err => {
                         loading.dismiss()
                         this.toast.create({
                    message: err.message,
                    duration: 2500,
                    position: 'bottom'
                  }).present()
                       })
    }
  }

}

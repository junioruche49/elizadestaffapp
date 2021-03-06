import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { Quotation } from '../../models/quotation.model'
import { Users } from '../../service/user.service';
import { formsService } from '../../service/formsService.service';
import { Usersadded } from '../../models/users.model'
import { alertData } from '../../models/alertdata.model'
import { ShowquotationPage } from '../showquotation/showquotation'
import { QuotesPage } from '../quotes/quotes'

/**
 * Generated class for the QuotationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class QuotationPage {
	products: Products[];
	singleProduct : Products;
	user : User;
	usersadded: Usersadded[] = [];
	usersdata: alertData;
	selecteduser: any;
	quotation: Quotation[] = [];

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public product: Productservice,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  private alertCtrl: AlertController,
  			  private modal: ModalController) {

  	this.products = this.product.getProducts()
  	this.usersadded = this.users.getUsers();
	    this.user = this.users.getUser();
	    this.quotation = this.formservice.getQuotation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotationPage');
  }

  // submit(form: NgForm){
  	
  // 	if (this.usersadded.length > 0) {
  		
  // 		let alert = this.alertCtrl.create();
  //   alert.setTitle('Select User');

  //   	alert.addInput({
  //   		type: 'radio',
	 //      label: 'You',
	 //      value: this.user.customer_number,
	 //      checked: false
  //   	});

	 //    for (let userdata of this.usersadded) {
	 //    	this.usersdata = {
	 //      type: 'radio',
	 //      label: userdata.name +' - '+ userdata.code,
	 //      value: userdata.code,
	 //      checked: false
	 //    }
	 //    alert.addInput(this.usersdata);
	 //    }
	    

	 //    alert.addButton('Cancel');
	 //    alert.addButton({
	 //      text: 'OK',
	 //      handler: data => {
	 //      	this.selecteduser = data;
	 //      	this.formservice.addQuotation(new Quotation(this.selecteduser, 
  // 												form.value.product, 
  // 												form.value.quantity))
  // 			console.log(this.formservice.getQuotation());
  // 			this.navCtrl.pop()
	 //      }
	 //    });
	 //    alert.present(this.selecteduser);
	    

  // 	}else{

  // 		const toast = this.toast.create({
	 //  		message: 'Sent Successfully',
	 //  		duration: 3500,
	 //  		position: 'bottom'
  // 		});
	 //  	toast.present()
	 //  	 this.selecteduser = this.user.customer_number;
	 //  	 this.formservice.addQuotation(new Quotation(this.selecteduser, 
  // 												form.value.product, 
  // 												form.value.quantity))
  // 	console.log(this.formservice.getQuotation());
  // 		this.navCtrl.pop()
  	

  // 	}

  // }

  showmodal(){
  	this.modal.create(ShowquotationPage).present();
  }
  getproductname(index: number){
  	this.singleProduct = this.product.getProduct(index);
  	return this.singleProduct.ProductName;
  }

  removefavorite(index: number){
  	this.formservice.removeQuotation(index);
  	this.quotation.splice(index, 1);
  	console.log(index)
  }


  addQuotation(){
  	// let number = Math.floor((Math.random() * 10000000) + 1)
  	// for (let quotation of this.quotation) {
  	// 	if (quotation.product_type ==  "Motor Vehicle") {
  	// 		this.product.addvehicle(quotation, number)
  	// 		.subscribe((data: any)=>{
  	// 			this.formservice.sentQuotation.push(quotation)
  	// 			console.log(data.message);
  	// 		},err =>{
  	// 			console.log(err.message)
  	// 		})
  	// 	}else{
  	// 		this.product.addsparepart(quotation, number)
  	// 		.subscribe((data: any)=>{
  	// 			this.formservice.sentQuotation.push(quotation)
  	// 			console.log(data.message);
  	// 		},err =>{
  	// 			console.log(err.message)
  	// 		})
  	// 	}
  	// }
    this.formservice.SendQuotation(this.quotation);
  	this.formservice.removeQuotations();
  	const toast = this.toast.create({
  		message: 'Sent Successfully',
  		duration: 1500,
  		position: 'bottom'
  	});
  	toast.present()

    this.quotation = [];
    this.navCtrl.setRoot(QuotesPage);
  }





}

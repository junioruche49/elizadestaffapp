import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Products } from '../../models/products.model'
import { Productservice } from '../../service/products.service'
import { Quotation } from '../../models/quotation.model'
import { Users } from '../../service/user.service';
import { User } from '../../models/user.model'
import { formsService } from '../../service/formsService.service';
import { Usersadded } from '../../models/users.model'
import { alertData } from '../../models/alertdata.model'
import { QuotationPage } from '../../pages/quotation/quotation'

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage implements OnInit  {

	prod_idex: Products;
	index: number;
	quantity: number;
	product: Products;

	usersadded: Usersadded[] = [];
	user : User;
	usersdata: alertData;
	selecteduser: any;

	chassis_no: any;
	part_no: any;
	spquantity: any;
	desc: any;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public formservice: formsService,
  			  public users: Users,
  			  public toast: ToastController,
  			  private storage: Storage,
  			  private alertCtrl: AlertController,
  			  public products: Productservice) {

  	
	    this.usersadded = this.users.getUsers();
	    this.user = this.users.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  ngOnInit(){
  	this.prod_idex = this.navParams.get('id');
  	this.index = this.navParams.get('index');
  }

  // addquotation(){
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

	 //      	if (this.prod_idex.ProductType == 'Motor Vehicle') {
	 //      		this.product = this.products.getProduct(this.index);
	 //      		this.formservice.addQuotation({
	 //      			customercode: this.selecteduser,
		// 			productname: this.product.ProductName,
	 //      			product: this.index,
	 //      			qty: this.quantity,
	 //      			product_type: this.prod_idex.ProductType,
	 //      			vehicle_model: 'toyota',
	 //      			vehicle_year: '2017',
	 //      			vehicle_reg_no: this.product.ProductID 
	 //      		})
  // 			console.log(this.formservice.getQuotation());
	 //      	}else{
	 //      		this.product = this.products.getProduct(this.index);
	 //      		this.formservice.addQuotation({
		// 						      			customercode: this.selecteduser,
		// 						      			productname: this.product.ProductName,
		// 						      			product: this.index,
		// 						      			qty: this.spquantity,
		// 						      			product_type: this.prod_idex.ProductType,
		// 						      			chasisno: this.chassis_no,
		// 						      			part_desc: this.desc,
		// 						      			part_no: this.part_no
		// 						      		})
	 //      	}
	      	
	      	
  // 			this.navCtrl.push(QuotationPage)
	 //      }
	 //    });
	 //    alert.present();
	    

  // 	}else{

  // 		const toast = this.toast.create({
	 //  		message: 'Sent Successfully',
	 //  		duration: 3500,
	 //  		position: 'bottom'
  // 		});
	 //  	toast.present()
	 //  	 this.selecteduser = this.user.customer_number;
	 //  	 if (this.prod_idex.ProductType == 'Motor Vehicle') {
	 //      		this.product = this.products.getProduct(this.index);
	 //      		this.formservice.addQuotation({
	 //      			customercode: this.selecteduser,
		// 			productname: this.product.ProductName,
	 //      			product: this.index,
	 //      			qty: this.quantity,
	 //      			product_type: this.prod_idex.ProductType,
	 //      			vehicle_model: 'toyota',
	 //      			vehicle_year: '2017',
	 //      			vehicle_reg_no: this.product.ProductID 
	 //      		})
  // 			console.log(this.formservice.getQuotation());
	 //      	}else{
	 //      		this.product = this.products.getProduct(this.index);
	 //      		this.formservice.addQuotation({
	 //      			customercode: this.selecteduser,
		// 			productname: this.product.ProductName,
	 //      			product: this.index,
	 //      			qty: this.spquantity,
	 //      			product_type: this.prod_idex.ProductType,
	 //      			chasisno: this.chassis_no,
	 //      			part_desc: this.desc,
	 //      			part_no: this.part_no
	 //      		})
	 //      	}
  // 		this.navCtrl.push(QuotationPage)
  	

  // 	}

  	
  	
  // }

}

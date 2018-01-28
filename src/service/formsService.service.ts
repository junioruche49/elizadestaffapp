import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Showroom } from '../models/showroom.model'
import { Schedule } from '../models/schedule.model'
import { Diagnosis } from '../models/diagnosis.model';
import { bodyWork } from '../models/bodywork.model'
import { Service } from '../models/service.model'
import { mechanicalRepair } from '../models/mechanicalrepair.model'
import { saleSexecutive } from '../models/salesexecutive.model'
import { Quotation } from '../models/quotation.model'
import { User } from '../models/user.model'
import { Users } from '../service/user.service'

@Injectable()

export class formsService {
	User: User;
	public showroom: Showroom[] = []
	public schedule: Schedule[] = []
	private diagnosis: Diagnosis[] = []
	private bodywork: bodyWork[] =[]
	private service: Service[] = []
	private mechanicalrepair: mechanicalRepair[] = []
	public salesexecutive: saleSexecutive[] = []
	private quotation: Quotation[] = [];
	private sentQuotation: Quotation[] = [];

	constructor(private http: HttpClient, public Users: Users){
		this.User = this.Users.getUser();

	}

	addShowroom(value: Showroom){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/appointment/showroom', {location: value.location, datetime: value.date_time}, {headers: headers})
		
	}

	getShowrooms(){
		return this.showroom.slice();
	}

	getShowroom(index: number){
		return this.showroom[index];
	}

	deleterShowroom(index: number){
		this.showroom.splice(index, 1);
	}

	addSchedule(value: Schedule){
				let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/appointment/demo', {location: value.location, datetime: value.date_time}, {headers: headers})

	}

	getSchedule(){
		return this.schedule.slice();
	}

	deleterSchedule(index: number){
		this.schedule.splice(index, 1);
	}

	addDiagnosis(value: Diagnosis){
		this.diagnosis.push(value);
	}

	getDiagnosis(){
		return this.diagnosis.slice();
	}

	addbodyWork(value: bodyWork){
		this.bodywork.push(value);
	}

	getbodywork(){
		return this.bodywork.slice();
	}

	addService(value: Service){
		this.service.push(value);
	}

	getService(){
		return this.service.slice();
	}

	addMechanicalrepair(value: mechanicalRepair){
		this.mechanicalrepair.push(value);
	}

	getMechanicalrepair(){
		return this.mechanicalrepair;
	}

	addSalesExecutive(value: saleSexecutive){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/appointment/call', {comment: value.comment, phone: value.phonenumber, datetime: value.date_time}, {headers: headers})
	}

	getSalesExecutive(){
		return this.salesexecutive.slice();
	}

	addQuotation(value: Quotation){
		this.quotation.push(value);
	}

	getQuotation(){
		return this.quotation.slice();
	}

	getQuote(index: number){
		return this.quotation[index];
	}
	removeQuotation(index: number){
		this.quotation.splice(index, 1);
	}

	SendQuotation(quote: Quotation[]){
		this.quotation = [];
		this.sentQuotation.push(...quote);
	}
	getSentQuotation(){
		return this.sentQuotation;
	}
	getSingleSetQuotation(index: number){
		return this.sentQuotation[index];
	}

}
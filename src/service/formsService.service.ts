import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
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
import { Cars } from '../models/cars.model'
import { Appointments } from '../models/appointments.model'
import { ServiceHistory } from '../models/servicehistory.model'

@Injectable()

export class formsService {
	User: User;
	public showroom: Showroom[] = []
	public schedule: Schedule[] = []
	public diagnosis: Diagnosis[] = []
	public bodywork: bodyWork[] =[]
	public service: Service[] = []
	public mechanicalrepair: mechanicalRepair[] = []
	public salesexecutive: saleSexecutive[] = []
	private quotation: Quotation[] = [];
	public sentQuotation: Quotation[] = [];
	public appointments: Appointments[] = []
	public servicehistory: ServiceHistory[] = []

	constructor(private http: HttpClient, public Users: Users, public storage: Storage){
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
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/service/diagnosis', 
			{vehicle_reg_no: value.reg_no, 
			vehicle_type: value.vehicle_type, 
			vehicle_model: value.vehicle_model,
			vehicle_year: value.vehicle_year,
			mileage: '3000',
			last_service_date: value.service_date,
			issue: value.percieved_issue,
			datetime: value.pickup}, 
			{headers: headers})
	}

	getDiagnosis(){
		return this.diagnosis.slice();
	}

	addbodyWork(value: bodyWork){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/service/bodywork', 
			{vehicle_reg_no: value.reg_no, 
			vehicle_type: value.vehicle_type, 
			vehicle_model: value.vehicle_model,
			vehicle_year: value.vehicle_year,
			body_work_type: value.bodywork_type,
			car_part: value.desc,
			datetime: value.pickup}, 
			{headers: headers})
	}

	getbodywork(){
		return this.bodywork.slice();
	}

	addService(value: Service){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		console.log(value)
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/service/service', 
			{vehicle_reg_no: value.reg_no, 
			vehicle_type: value.vehicle_type, 
			vehicle_model: value.vehicle_model,
			vehicle_year: value.vehicle_year,
			last_service_date: value.service_date,
			datetime: value.pickup,
			mileage: value.mileage,
			service_type: value.service,
			service_series: value.service_type,
			issue: value.percieved}, 
			{headers: headers})
	}

	getService(){
		return this.service.slice();
	}

	addMechanicalrepair(value: mechanicalRepair){
		let headers = new HttpHeaders({'Authorization': 'Bearer '+this.User.token });
		return this.http.post('http://elizade.ebukaokwuokenye.com/api/service/repair', 
			{vehicle_reg_no: value.reg_no, 
			vehicle_type: value.vehicle_type, 
			vehicle_model: value.vehicle_model,
			vehicle_year: value.vehicle_year,
			last_service_date: value.service_date,
			repair_type: value.repair_type,
			repair_description: value.percieved_issue,
			datetime: value.pickup}, 
			{headers: headers})
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

	removeQuotations(){
		this.quotation = [];
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

	getServiceHistory(){
		return this.servicehistory;
	}

	addServiceHistory(value: ServiceHistory[]){
		this.servicehistory.push(...value)
	}

	addAppointments(value: any){
		this.appointments.push(...value);
	}

	getAppointments(){
		return this.appointments;
	}





}
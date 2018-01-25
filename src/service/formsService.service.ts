import { Showroom } from '../models/showroom.model'
import { Schedule } from '../models/schedule.model'
import { Diagnosis } from '../models/diagnosis.model';
import { bodyWork } from '../models/bodywork.model'
import { Service } from '../models/service.model'
import { mechanicalRepair } from '../models/mechanicalrepair.model'
import { saleSexecutive } from '../models/salesexecutive.model'
import { Quotation } from '../models/quotation.model'


export class formsService {
	private showroom: Showroom[] = []
	private schedule: Schedule[] = []
	private diagnosis: Diagnosis[] = []
	private bodywork: bodyWork[] =[]
	private service: Service[] = []
	private mechanicalrepair: mechanicalRepair[] = []
	private salesexecutive: saleSexecutive[] = []
	private quotation: Quotation[] = [];

	addShowroom(value: Showroom){
		this.showroom.push(value);
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
		this.schedule.push(value);
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
		this.salesexecutive.push(value)
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

}
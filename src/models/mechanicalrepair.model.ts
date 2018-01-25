export class mechanicalRepair{
	constructor(public customercode: string, 
				public reg_no: string, 
				public vehicle_type: string, 
				public vehicle_model: string,
				public vehicle_year: number,
				public repair_type: string,
				public service_date: string,
				public percieved_issue: string,
				public pickup: string){}
}
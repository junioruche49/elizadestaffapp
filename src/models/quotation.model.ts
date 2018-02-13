export class Quotation{
	constructor(public customercode: any, 
				public productname: any,
				public image: string,
				public product: any, 
				public product_type: string, 
				public comment?: string,
				public qty?: any,
				public vehicle_model?: string,
				public vehicle_year?: string, 
				public vehicle_reg_no?: string,
				public chasisno?: string,
				public part_desc?: string,
				public part_no?: string  ){}
}
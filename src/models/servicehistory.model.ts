export class ServiceHistory{
	constructor(public AppointmentGuid: string,
				public Subject: string,
				public CustomerID: string,
				public CustomerName: string,
				public Dimension: string,
				public Start: string,
				public End: string,
				public AppointmentType: string,
				public VehicleRegNo: string,
				public Mileage: string,
				public LastServiceDate: string,
				public ServiceType: string,
				public ServiceStatus: string,
				public CauseOfPausedService: string,
				public SuggestedPickupTime: string,
				public CallPreference: string){}
}
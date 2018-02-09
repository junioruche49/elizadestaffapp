import { Saloon } from '../models/saloon.model'
import { suv } from '../models/suv.model'
import { utility } from '../models/utility.model'
import { Vehiclemodel } from '../models/vehiclemodel.model'

export class Vehicle{
	public saloon:Saloon[];
	public car: Vehiclemodel[];
	public suv: suv[];
	public utility: utility[];

	constructor(){
		this.saloon = [ 
			new Saloon('1', 'Avanza'),
			new Saloon('2', 'Avensis')
		]

		this.suv = [
			new suv('3', 'Fortuner'),
			new suv('4', 'Land Cruiser')
		]

		this.utility = [
			new utility('5', 'Coaster'),
			new utility('6', 'Dyna')
		]

		this.car = [
			new Vehiclemodel('1', 'toyota', 'Avanza', 2015, 'avanza1.jpg', 'avanza2.jpg', 'avanza3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('1', 'toyota', 'Avanza', 2014, 'avanza4.png', 'avanza5.png', 'avanza2.jpg',  '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('2', 'toyota', 'Avensis 1.3 MT', 2016, 'avensis4.jpg', 'avensis5.jpg', 'avensis6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('2', 'toyota', 'Avensis 1.3 MT', 2012, 'avensis1.jpg', 'avensis2.jpg', 'avensis3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('1', 'toyota', 'Avanza', 2013, 'avanza3.png', 'avanza1.jpg', 'avanza2.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('2', 'toyota', 'Avensis 1.3 MT', 2012, 'avensis3.jpg', 'avensis2.jpg', 'avensis1.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('3', 'toyota', 'Fortuner', 2013, 'fortuner2.png', 'fortuner1.jpg', 'fortuner3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('4', 'toyota', 'Land Cruiser', 2013, 'landcruiser2.png', 'landcruiser1.jpeg', 'landcruiser3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('3', 'toyota', 'Fortuner', 207, 'fortuner6.png', 'fortuner4.jpg', 'fortuner5.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('4', 'toyota', 'Land Cruiser', 2015, 'landcruiser5.png', 'landcruiser4.jpg', 'landcruiser6.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('5', 'toyota', 'Coaster', 2014, 'utility1.png', 'utility2.png', 'utility3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('5', 'toyota', 'Coaster', 2014, 'utility3.png', 'utility2.png', 'utility1.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('6', 'toyota', 'Dyna', 2014, 'dyna1.jpg', 'dyna2.jpg', 'dyna3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('6', 'toyota', 'Dyna', 2014, 'dyna5.jpg', 'dyna4.jpg', 'dyna6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' )
		]
	}
}
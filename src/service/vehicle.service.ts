import { Saloon } from '../models/saloon.model'
import { suv } from '../models/suv.model'
import { utility } from '../models/utility.model'
import { Vehiclemodel } from '../models/vehiclemodel.model'
import { Sparepartquotation } from '../models/sparepartquotation.model'

export class Vehicle{
	public saloon:Saloon[];
	public car: Vehiclemodel[];
	public suv: suv[];
	public utility: utility[];
	public pickups: utility[];
	public buses: utility[];
	public trucks: utility[];
	public certified: utility[];
	public sparepart: Sparepartquotation[];

	constructor(){
		this.saloon = [ 
			new Saloon('2', 'Avensis', 'day-exterior-27_040.jpg'),
			new Saloon('7', 'Camry', '2018_toyota_camry_angularfront.jpg'),
			new Saloon('8', 'Corolla', 'download.jpeg'),
			new Saloon('9', 'Yaris', 'USC50TOC191B021001.jpg')
		]

		this.suv = [
			new suv('3', 'Fortuner', '047.jpg'),
			new suv('4', 'Land Cruiser', 'USC30TOS121A021001.jpg'),
			new suv('10', 'Land Cruiser Prado', '20131205073612_Toyota Land Cruiser Prado.jpg'),
			new suv('11', 'Rav4', 'USC70TOS111D021001.png')
		]

		this.pickups = [
			new utility('13', 'Hilux', 'download.png'),
			new utility('14', 'Landcruiser 70/Safari Pick up', 'LandCruiser Troop Carrier Workmate french vanilla front 940x529.png')
		]

		this.buses = [
			new Saloon('1', 'Avanza', 'toyota-avanza-best-car.jpg'),
			new utility('12', 'Hiace', 'hiace.png'),
			new utility('5', 'Coaster', '2018_Toyota_Coaster.png'),

		]

		this.trucks = [
			new utility('6', 'Dyna', 'intro_2.jpg'),
		]

		this.certified = [
			new suv('10', 'Prado', '20131205073612_Toyota Land Cruiser Prado.jpg'),

		]

		this.utility = [
			new utility('14', 'Landcruiser 70/Safari Pick up', 'LandCruiser Troop Carrier Workmate french vanilla front 940x529.png')
		]

		this.car = [
			new Vehiclemodel('1', '223230', 'toyota', 'Avanza', 2015, 'avanza1.jpg', 'avanza2.jpg', 'avanza3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('1', '213230', 'toyota', 'Avanza', 2014, 'avanza4.png', 'avanza5.png', 'avanza2.jpg',  '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('2', '2233430', 'toyota', 'Avensis 1.3 MT', 2016, 'avensis4.jpg', 'avensis5.jpg', 'avensis6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('2', '2232301', 'toyota', 'Avensis 1.3 MT', 2012, 'avensis1.jpg', 'avensis2.jpg', 'avensis3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('1', '223239', 'toyota', 'Avanza', 2013, 'avanza3.png', 'avanza1.jpg', 'avanza2.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('2', '223232', 'toyota', 'Avensis 1.3 MT', 2012, 'avensis3.jpg', 'avensis2.jpg', 'avensis1.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('3', '223231', 'toyota', 'Fortuner', 2013, 'fortuner1.jpg', 'fortuner1.jpg', 'fortuner1.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('4', '223233', 'toyota', 'Land Cruiser', 2013, 'landcruiser2.png', 'landcruiser1.jpeg', 'landcruiser3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('3', '223234', 'toyota', 'Fortuner', 207, 'fortuner6.png', 'fortuner4.jpg', 'fortuner5.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.'),
			new Vehiclemodel('4', '223235', 'toyota', 'Land Cruiser', 2015, 'landcruiser5.png', 'landcruiser4.jpg', 'landcruiser6.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('5', '223236', 'toyota', 'Coaster', 2014, 'utility1.png', 'utility2.png', 'utility3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('5', '223237', 'toyota', 'Coaster', 2014, 'utility3.png', 'utility2.png', 'utility1.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('6', '223238', 'toyota', 'Dyna', 2014, 'dyna1.jpg', 'dyna2.jpg', 'dyna3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('6', '2232391', 'toyota', 'Dyna', 2014, 'dyna5.jpg', 'dyna4.jpg', 'dyna6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('7', '22323823', 'toyota', 'Camry', 2016, 'camry2.png', 'camry.jpeg', 'camry3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('7', '223239145', 'toyota', 'Camry', 2017, 'camry5.png', 'camry4.jpg', 'camry6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('8', '11323823', 'toyota', 'Corolla', 2016, 'corolla1.png', 'corolla2.png', 'corolla3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('8', '243239145', 'toyota', 'Corolla', 2017, 'corolla6.png', 'corolla5.png', 'corolla4.jpeg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('9', '11320823', 'toyota', 'Yaris', 2016, 'yaris6.jpg', 'yaris5.jpg', 'yaris4.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('9', '2403239145', 'toyota', 'Yaris', 2017, 'yaris2.png', 'yaris1.jpeg', 'yaris3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('10', '1011320823', 'toyota', 'Land Cruiser Prado', 2016, 'prado1.jpg', 'prado2.jpg', 'prado3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('10', '203239145', 'toyota', 'Land Cruiser Prado', 2017, 'prado4.jpg', 'prado5.jpg', 'prado6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('11', '10113020823', 'toyota', 'Rav4', 2016, 'rav1.png', 'rav2.png', 'rav3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('11', '2403294145', 'toyota', 'Rav4', 2017, 'rav4.jpg', 'rav5.jpg', 'rav6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('12', '101120823', 'toyota', 'Hiace', 2016, 'hiace1.jpg', 'hiace2.jpg', 'hiace3.JPG', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('12', '2403291145', 'toyota', 'Hiace', 2017, 'hiace4.jpg', 'hiace5.jpg', 'hiace6.jpeg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('13', '1012082300', 'toyota', 'Hilux', 2016, 'hilux1.png', 'hilux2.jpg', 'hilux3.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('13', '240329145', 'toyota', 'Hilux', 2017, 'hilux6.png', 'hilux5.jpg', 'hilux4.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('14', '10122300', 'toyota', 'Landcruiser 70/Safari Pick up', 2016, 'safari1.png', 'safari2.png', 'safari3.png', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' ),
			new Vehiclemodel('14', '2409145', 'toyota', 'Landcruiser 70/Safari Pick up', 2017, 'safari4.png', 'safari5.png', 'safari6.jpg', '1.5 Litre Engine, 4-Speed Automatic Transmission, Radio & CD Player, Alloy Rims, Airbags, Fog Lamps, Keyless Entry, Power Windows, Power Door Locks, Power steering, 7-seater, Fabric Seats, Air conditioner, Petrol Engine Safety: Airbags, Power Door Locks Comfort: Radio & CD Player, Keyless Entry, Power Steering, 7-seater, Fabric Seats.' )
		]


		this.sparepart = [
			new Sparepartquotation('Replacement A/C Compressor', 'rept191101_is.jpeg', '618387', 'A/C COMPRESSOR, NEW -- 1-groove belt; 0.5 in. belt width; 5.5 in. pulley diameter; 3.45 in. gauge line A; Pad mount manifold; Tangent mount; With clutch; A high quality, OE replacement A/C compressor; May require use of OE manifold; Backed by 1-year, unlimited-mileage warranty.', '68908387'),
			new Sparepartquotation('QUALITY-BUILT ALTERNATORS', 'mpa11201_is.jpeg', '11201', 'Quality-Builts alternators are engineered from the ground up to deliver unsurpassed reliability with each turn of the key. Quality-Built, a division of Motorcar Parts of America, is an automotive aftermarket brand of professional-quality starters and alternators Engineered and manufactured under strict QS-9000 standards to offer unsurpassed dependability for virtually every car on the road Durably constructed with premium components for maximum performance', '6811201'),
			new Sparepartquotation('Brake Disc', 'mpa11201_is.jpeg', 'JBR1127XPR', 'Replace your brakes with PowerStops Extreme Performance cross-drilled and slotted brake discs and make your driving experience more engaging', 'JBR1127XPR')
		]







	}
}
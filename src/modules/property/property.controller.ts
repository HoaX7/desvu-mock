import { Controller, Get, Logger, Post } from "@nestjs/common";
import { PropertyService } from "./property.service";
import { requester } from "src/helpers/requester";
import { PushHotelReservation } from "src/api/ariUpdates";
import { convertJsonToXml, prepareJsonObjectForXml } from "src/helpers";

@Controller("property")
export class PropertyController {
	logger = new Logger(PropertyController.name);
	constructor(public propertyService: PropertyService) {}
    
    /**
     * When a new reservation is made we must also
     * send the data to Cubilis in xml format.
     */
    @Post("/newReservation")
	async handleNewReservation() {
		// this.propertyService.updateReservation 
		const reservationData = {};
		// Prepare xml data based on OTA standards
		// with Hotel reservation detail
		const xmlData = prepareJsonObjectForXml(reservationData);
		PushHotelReservation(xmlData);
		return;
	}

    /**
     * This method will be used by Cubilis to retrieve
     * reservations present in our system.
     * 
     * This uri only acts as a fallback and it is recommended
     * to push the new reservation to Cubilis system as soon 
     * as a reservation is made.
     * 
     * `OTA_HotelResRQ`
     *
     * XML data is expected in response.
     */
    @Get("pullNewReservation")
    async handlePullReservations() {
    	const newReservations = this.propertyService.fetchReservations();
    	const resp = prepareJsonObjectForXml(newReservations);
    	return convertJsonToXml(resp);
    }
}
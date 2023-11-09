/**
 *
 * Responsible for ARIUpdates to update property rates and other data.
 * The two endpoints for this api must be used in the stardekk software to
 * receive updates.
 *
 * In some cases we must add listeners to subscribe to receive updates
 */

import {
	Body, Controller, Get, Header, Logger, Post 
} from "@nestjs/common";
import { getHotelAvailNotifRQ } from "src/mockData/ariUpdate";
import * as xmlparser from "xml2json";
import { PropertyService } from "../property/property.service";
import { UnitService } from "../unit/unit.service";
import { UnitGroupService } from "../unitGroup/unitGroup.service";
import { prepareJsonObjectForXml } from "src/helpers";

@Controller("ariUpdates")
export class ARIUpdateController {
	logger = new Logger(ARIUpdateController.name);
	constructor(
    public propertyService: PropertyService,
    public unitService: UnitService,
    public unitGroupService: UnitGroupService
	) {}
  /**
   * API Endpoint for Cubilis to retrieve room information
   * from our DB.
   *
   * 'OTA_HotelRoomListRQ'
   *
   * The data returned must be in xml format.
   * For all fields to be sent in response see Cubilis documentation.
   *
   *
   */
  @Get("/getHotelRoomList")
  @Header("Content-Type", "application/xml")
	async get() {
		/**
         * Not implementing obvious apis where you fetch the
         * data to prepare the xml. Since, this is jsut a mock.
         */
		// this.propertyService.getAll();
		// this.unitGroupService.getAll();
		// this.unitService.getAll();

		const data = {}; // Assuming we have all the data we need in this object.
		const jsonData = prepareJsonObjectForXml(data);
		xmlparser.toXml(jsonData);
		return hotelListXml; // Mock data to return
	}

  /**
     * API Endpoint to be used by Cubilis to send
     * hotel update notifications.
     * 
     * 'OTA_HotelAvailNotifRQ'
     * 
     * The data sent is in xml format.
     * To acknowledge that the data has been received successfuly
     * a success xml must be sent in the response.
     * 
     * returns `<?xml version="1.0" encoding="utf-8"?>
            <OTA_HotelAvailNotifRS Version="2.0" xmlns="http://www.opentravel.org/OTA/2003/05">
            <Success />
            </OTA_HotelAvailNotifRS>`

        This is a mock request
     */
  @Post("/updateNotif")
  async updateHotelRates(@Body() data) {
  	const xmlData = getHotelAvailNotifRQ();
  	const jsonData = xmlparser.toJson(xmlData);
  	this.logger.log(jsonData);

  	// Use the data sent by Cubilis to update
  	// rate plan and other details in appln DB.
  	// this.unitGroupService.update(data)
  	// this.ratePlan.update(data)
  	// ...etc


  	const successXml = `<?xml version="1.0" encoding="utf-8"?>
    <OTA_HotelAvailNotifRS Version="2.0" xmlns="http://www.opentravel.org/OTA/2003/05">
    <Success />
    </OTA_HotelAvailNotifRS>`;
  	return successXml;
  }
}


const hotelListXml = `
<?xml version="1.0" encoding="utf-8"?>
<OTA_HotelRoomListRS Version="2.0" xmlns="http://www.opentravel.org/OTA/2003/05">
 <Success />
 <HotelRoomLists>
 <HotelRoomList HotelCode="HotelCode">
 <RoomStays>
 <RoomStay>
 <RoomTypes>
 <RoomType IsRoom="true" RoomID="RoomID1">
 <RoomDescription Name="Name1" />
 </RoomType>
 </RoomTypes>
 <RatePlans>
 <RatePlan RatePlanID="RatePlanID1" RatePlanName="RatePlanName1" />
 <RatePlan RatePlanID="RatePlanID2" RatePlanName="RatePlanName2" />
 <RatePlan RatePlanID="RatePlanID3" RatePlanName="RatePlanName3" />
 </RatePlans>
 </RoomStay>
 <RoomStay>
 <RoomTypes>
 <RoomType IsRoom="true" RoomID="RoomID2">
 <RoomDescription Name="Name2" />
 </RoomType>
 </RoomTypes>
 <RatePlans>
 <RatePlan RatePlanID="RatePlanID4" RatePlanName="RatePlanName4" />
 <RatePlan RatePlanID="RatePlanID5" RatePlanName="RatePlanName5" />
 <RatePlan RatePlanID="RatePlanID6" RatePlanName="RatePlanName6" />
 </RatePlans>
 </RoomStay>
 </RoomStays>
 </HotelRoomList>
 </HotelRoomLists>
</OTA_HotelRoomListRS>`;


/**
 * xml <POS> auth must be sent in every request.
 * Refer Cubilis documentation for more info.
 */
export const stardekkXmlAuth = `<POS>
<Source>
<RequestorID Type="1" ID="info@stardekk.be" MessagePassword="U88m58W36" />
</Source>
<Source>
<RequestorID Type="2" ID="2" />
</Source>
</POS>`;

// Mocking the data sent by Cubilis for ARIUpdates
export const getHotelAvailNotifRQ = () => `
<?xml version="1.0" encoding="utf-8"?>
<OTA_HotelAvailNotifRQ Version="2.0" xmlns="http://www.opentravel.org/OTA/2003/05">
 ${stardekkXmlAuth}
 <AvailStatusMessages>
 <AvailStatusMessage BookingLimit="0">
 <StatusApplicationControl InvCode="RoomID1" Start="1900-01-01" End="1900-01-01"
RatePlanID="RatePlanID1" />
 <LengthsOfStay>
 <LengthOfStay MinMaxMessageType="SetMinLOS" Time="0" />
 <LengthOfStay MinMaxMessageType="SetMinLOS" Time="3" />
 <LengthOfStay MinMaxMessageType="SetMaxLOS" Time="-1" />
 <LengthOfStay MinMaxMessageType="SetMaxLOS" Time="5" />
 </LengthsOfStay>
 <BestAvailableRates>
 <BestAvailableRate Amount="120.34" />
 <BestAvailableRate Amount="110.34" RatePlanCode="Single"/>
 </BestAvailableRates>
 <RestrictionStatus Status="Open" />
 </AvailStatusMessage>
 <AvailStatusMessage BookingLimit="0">
 <StatusApplicationControl InvCode="RoomID1" Start="1900-01-01" End="1900-01-01" />
 <LengthsOfStay>
 <LengthOfStay Time="1" MinMaxMessageType="SetMinLOS" />
 </LengthsOfStay>
 <BestAvailableRates>
 <BestAvailableRate Amount="120.34" />
 </BestAvailableRates>
 <RestrictionStatus Status="Open" />
 </AvailStatusMessage>
 </AvailStatusMessages>
</OTA_HotelAvailNotifRQ>`;


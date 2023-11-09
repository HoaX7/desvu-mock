import { requester } from "src/helpers/requester";

export const PushHotelReservation = (data: any) => {
	return requester({
		body: data,
		url: "/cubilis/api",
		method: "POST"
	}, { headers: { "Content-Type": "application/xml" } });
};
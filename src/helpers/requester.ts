/**
 * Responsible for making http calls to endpoints.
 * 
 * We will use this requester to make api calls to Cubilis
 * when we need to push reservation data.
 * https://cubilis.eu/plugins/ota/reservations.aspx
 * 
 * `axios` can be used instead of fetch
 */

export const requester = async (options: any, init?: RequestInit) => {
	return fetch(options, init);
};
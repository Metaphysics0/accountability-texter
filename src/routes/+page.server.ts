import { TWILIO_TEST_PHONE_NUMBER } from '$env/static/private';
import twilio from '../lib/twilio';
import type { Actions } from './$types';

export const actions = {
	sendMotivationalMessageToUser: async (event) => {
		console.log('EVENT', event);

		try {
			await twilio.messages.create({
				from: TWILIO_TEST_PHONE_NUMBER,
				body: 'Yo',
				to: '+9720524684087'
			});
		} catch (error) {
			console.error('ERROR', error);
		}

		return { success: true };
	}
} satisfies Actions;

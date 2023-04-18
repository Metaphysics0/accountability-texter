import type { Actions } from './$types';
import { TEST_PHONE_NUMBER, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from '$env/static/private';

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();

		// TODO: Build the formatted params in the front-end!
		//
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const formattedPhone = formData.get('phone').split(' ').join('');

		const urlParams = {
			To: `+972${formattedPhone}`,
			From: TEST_PHONE_NUMBER,
			Body: 'I want you to: ' + formData.get('goal')
		};

		const betterParams = Object.entries(urlParams)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
			.join('&');

		await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`)
			},
			body: betterParams,
			method: 'POST'
		});

		return { success: true };
	}
} satisfies Actions;

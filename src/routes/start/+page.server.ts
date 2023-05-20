import {
	TWILIO_TEST_PHONE_NUMBER,
	TWILIO_ACCOUNT_SID,
	TWILIO_AUTH_TOKEN
} from '$env/static/private';
import type { Actions } from './$types';

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const phone = formData.get('phone');
		const countryCode = formData.get('countryCode');

		const formattedPhone = formatPhoneParam(phone, countryCode);

		const requestBody = {
			To: formattedPhone,
			From: TWILIO_TEST_PHONE_NUMBER,
			Body: 'I want you to: ' + formData.get('goal')
		};

		await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`)
			},
			body: encodeParams(requestBody),
			method: 'POST'
		});

		return { success: true };
	}
} satisfies Actions;

function encodeParams(params: Record<string, string>): string {
	return Object.entries(params)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');
}
function formatPhoneParam(
	val: FormDataEntryValue | null,
	countryCode: FormDataEntryValue | null
): string {
	if (!val || !countryCode) return '';

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return `+${countryCode}` + val.replace(/\s/g, '');
}

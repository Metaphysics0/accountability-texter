export const config = {
	runtime: 'edge'
};

export default (request: Request) => {
	sendMessageToUser();
	return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};

async function sendMessageToUser() {
	console.log('SENDING MESSAGE');

	// const formattedPhone = formatPhoneParam(phone, countryCode);

	// const requestBody = {
	// 	To: formattedPhone,
	// 	From: TEST_PHONE_NUMBER,
	// 	Body: 'I want you to: ' + formData.get('goal')
	// };

	// await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
	// 	headers: {
	// 		'Content-Type': 'application/x-www-form-urlencoded',
	// 		Authorization: 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`)
	// 	},
	// 	body: encodeParams(requestBody),
	// 	method: 'POST'
	// });

	return { success: true };
}

function encodeParams(params: Record<string, string>): string {
	return Object.entries(params)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');
}

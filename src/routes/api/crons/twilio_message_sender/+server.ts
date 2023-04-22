import { TEST_PHONE_NUMBER, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from '$env/static/private';
import { PrismaClient } from '@prisma/client/edge';
import { ipAddress, type RequestContext } from '@vercel/edge';

const prisma = new PrismaClient();
export const config = {
	runtime: 'edge'
};

export default async (request: Request, ctx: RequestContext) => {
	// await sendMessageToAllRelevantUsers();
	console.log('RUNNING THE EDGE FUNCTION');
	return new Response(
		`Hello, from ${request.url} I'm now an Edge Function!
    calling from ${ipAddress(request) || 'unknown'}
    `
	);
};

async function sendMessageToAllRelevantUsers(): Promise<void> {
	const relevantUsers = await getRelevantUsers();
	relevantUsers.forEach(sendMessageToUser);
}

async function sendMessageToUser(user: any) {
	const userParams = {
		To: user.phoneNumber,
		From: TEST_PHONE_NUMBER,
		Body: 'I want you to achieve your goal of ' + user.goal
	};
	try {
		const url = getTwilioSendMessageUrl();
		const params = getTwilioRequestBody(userParams);
		await fetch(url, params);
	} catch (error) {
		console.error(`Error sending message to user: ${JSON.stringify(user, null, 2)}`);
	}
}

function getRelevantUsers() {
	return prisma.user.findMany({
		where: {
			goalTargetDate: {
				gte: new Date()
			}
		}
	});
}

function getTwilioRequestBody(userParams: Record<string, string>) {
	return {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization:
				'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')
		},
		body: encodeParams(userParams),
		method: 'POST'
	};
}

function getTwilioSendMessageUrl(): string {
	const baseUrl = 'https://api.twilio.com/2010-04-01/Accounts/';
	const path = '/Messages.json';

	return baseUrl + TWILIO_ACCOUNT_SID + path;
}

const encodeParams = (params: Record<string, string>): string =>
	Object.entries(params)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');

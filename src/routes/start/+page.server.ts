import prisma from '$lib/server/prisma';
import type { Prisma } from '@prisma/client/edge';
import type { Actions } from './$types';

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		try {
			const params = getCreateUserParamsFromFormData(formData);
			await prisma.user.create({
				data: params
			});
			return { success: true };
		} catch (error) {
			console.error('Error creating user', error);
			throw error;
		}
	}
} satisfies Actions;

/* Param Methods */
function getCreateUserParamsFromFormData(formData: FormData): Prisma.UserCreateInput {
	// TODO: Switch these to required params
	const phone = formData.get('phone');
	const countryCode = formData.get('countryCode');
	// const phone = requireParam<number>(formData, 'phone');
	// const countryCode = requireParam<number>(formData, 'countryCode');

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const phoneNumber = formatPhoneParam(phone, countryCode);

	const goal = formData.get('goal') as string;
	const goalTargetDate = formData.get('targetDate') as string;
	const messageFrequency = formData.get('messageFrequency') as string;

	return {
		phoneNumber,
		goal,
		goalTargetDate: new Date(goalTargetDate),
		messageFrequency: Number(messageFrequency)
	};
}

function formatPhoneParam(phoneNumber: number, countryCode: FormDataEntryValue | null): string {
	if (!phoneNumber || !countryCode) return '';

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return `+${countryCode}` + phoneNumber.replace(/\s/g, '');
}

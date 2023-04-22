import { start_prisma } from '$lib/server/prisma';

start_prisma()
	.then(() => {
		console.log('🟢 Started Prisma');
	})
	.catch((e) => {
		console.error('🔴 Error starting prisma', e);
	});

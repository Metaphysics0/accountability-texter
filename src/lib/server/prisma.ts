import { browser } from '$app/environment';
import { PrismaClient } from '@prisma/client/edge';

const prisma = (!browser && new PrismaClient()) as PrismaClient;

export function start_prisma() {
	console.log('🟠 Starting prisma...');
	return prisma.$connect();
}

export default prisma;

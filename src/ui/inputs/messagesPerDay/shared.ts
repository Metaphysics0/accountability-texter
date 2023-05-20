export const availableMessageCountPerDay = [1, 2, 3] as const;
export type IAvailableCount = (typeof availableMessageCountPerDay)[number];

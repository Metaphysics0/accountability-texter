function getOneMonthFromNow(): string {
	const currentDate = new Date();
	const oneMonthAhead = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
	return oneMonthAhead.toJSON().slice(0, 10);
}

function getCurrent(): string {
	const currentDate = new Date();
	currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset());
	return currentDate.toJSON().slice(0, 10);
}

export const DateHelper = {
	getCurrent,
	getOneMonthFromNow
};

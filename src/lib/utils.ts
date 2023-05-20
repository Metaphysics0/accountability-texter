export const encodeParams = (params: Record<string, string> | object): string =>
	Object.entries(params)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');

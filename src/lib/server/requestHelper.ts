export function requireParam<T>(formData: FormData, name: string): T {
	const value = formData.get(name);
	if (value === null || typeof value === 'undefined') {
		throw `The value provided for ${name} is not valid`;
	}
	return value as T;
}

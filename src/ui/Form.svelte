<script lang="ts">
	import { enhance } from '$app/forms';
	import Date from './inputs/Date.svelte';
	import Frequency from './inputs/Frequency.svelte';
	import Goal from './inputs/Goal.svelte';
	import PhoneInput from './inputs/PhoneInput.svelte';

	function createPhoneParam(val: string | null, countryCode: string | null): string {
		if (!val || !countryCode) return '';

		return `+${countryCode}` + val.replace(/\s/g, '');
	}
</script>

<!-- action="?/submit" -->
<form
	method="POST"
	use:enhance={({ data }) => {
		const phone = data.get('phone');
		const countryCode = data.get('countryCode');
		// @ts-ignore
		const phoneParam = createPhoneParam(phone, countryCode);

		return async ({ result }) => {};
	}}
>
	<Goal />
	<PhoneInput />
	<Date />
	<Frequency />
	<button type="submit">Lets go</button>
</form>

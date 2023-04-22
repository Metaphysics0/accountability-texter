<script lang="ts">
	import TelInput, { normalizedCountries } from 'svelte-tel-input';
	import type { CountryCode } from 'svelte-tel-input/types';

	// Any Country Code Alpha-2 (ISO 3166)
	let selectedCountry = 'IL' as CountryCode;

	let value: string;

	// Optional - Extended information about the parsed phone number
	let parsedTelInput: null = null;

	// Field validity
	let isValid: boolean = true;
</script>

<label for="phone"> Phone Number </label>
<div class="wrap">
	<select
		class="country-select {!isValid && 'invalid'}"
		aria-label="Default select example"
		name="countryCode"
		bind:value={selectedCountry}
	>
		<option value={null} hidden={selectedCountry !== null}>Please select</option>
		{#each normalizedCountries as country (country.id)}
			<option
				value={country.iso2}
				selected={country.iso2 === selectedCountry}
				aria-selected={country.iso2 === selectedCountry}
			>
				{country.iso2} (+{country.dialCode})
			</option>
		{/each}
	</select>
	<TelInput
		placeholder="052 123 1234"
		name="phone"
		required
		bind:valid={isValid}
		bind:country={selectedCountry}
		bind:value
		bind:parsedTelInput
		class="basic-tel-input {!isValid && 'invalid'}"
	/>
</div>

<style>
	.wrap {
		display: flex;
	}

	.country-select {
		padding-right: 5px;
	}
	select {
		width: fit-content;
	}
</style>

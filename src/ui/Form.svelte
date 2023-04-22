<script lang="ts">
	import TargetDate from './inputs/TargetDate.svelte';
	import Frequency from './inputs/Frequency.svelte';
	import Goal from './inputs/Goal.svelte';
	import PhoneInput from './inputs/PhoneInput.svelte';
</script>

<form action="?/submit" method="POST">
	<Goal />
	<PhoneInput />
	<TargetDate />
	<Frequency />
	<button type="submit">Lets go</button>
</form>

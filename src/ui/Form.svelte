<script lang="ts">
	import Goal from './inputs/Goal.svelte';
	import PhoneInput from './inputs/PhoneInput.svelte';
	import TargetDate from './inputs/TargetDate.svelte';
	import MessagesPerDay from './inputs/messagesPerDay/MessagesPerDay.svelte';
</script>

<form action="?/submit" method="POST">
	<Goal />
	<PhoneInput />
	<TargetDate />
	<MessagesPerDay />
	<button type="submit">Let's go 🚀</button>
</form>

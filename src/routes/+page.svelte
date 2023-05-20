<script>
	import Goal from '../ui/inputs/Goal.svelte';
	import PhoneInput from '../ui/inputs/PhoneInput.svelte';
</script>

<header>
	<div class="container">
		<h1>Be Accountable.</h1>
		<form method="POST" action="?/sendMotivationalMessageToUser">
			<Goal />
			<PhoneInput />
			<button type="submit">Lets go</button>
		</form>
	</div>
</header>

<style>
	header h1 {
		text-align: center;
		margin-bottom: 5px;
	}
	@media (min-width: 576px) {
		h1 {
			--font-size: 2.25rem;
		}
	}

	@media (min-width: 768px) {
		h1 {
			--font-size: 2.5rem;
		}
	}
	@media (min-width: 992px) {
		h1 {
			--font-size: 2.75rem;
		}
	}
	@media (min-width: 1200px) {
		h1 {
			--font-size: 3rem;
		}
	}
</style>

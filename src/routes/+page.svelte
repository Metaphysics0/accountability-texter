<script>
	import Form from '../ui/Form.svelte';
</script>

<main class="container">
	<article class="grid">
		<div>
			<hgroup>
				<h1>Be Accountable.</h1>
				<h2>It starts today.</h2>
			</hgroup>
			<Form />
		</div>
		<div class="img-wrap">
			<img src="/images/cropped.jpg" alt="achievement" />
		</div>
	</article>
</main>

<style>
	.img-wrap {
		display: flex;
		align-items: center;
	}
</style>

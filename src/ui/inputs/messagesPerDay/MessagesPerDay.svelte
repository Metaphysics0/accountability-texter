<script lang="ts">
	import SendTime from './SendTime.svelte';
	import { availableMessageCountPerDay } from './shared';

	const reccomendedCount = 2 as const;

	function getLabel(count: number): string {
		if (count === reccomendedCount) {
			return '2 (Reccomended)';
		}
		return count.toString();
	}

	/*
    The variable and function here is solely for
    displaying the message interval select inputs.
  */
	$: selectedCount = reccomendedCount;
	function onInput(e: Event) {
		// @ts-ignore
		selectedCount = e.target.value;
	}
</script>

<fieldset>
	<legend>Messages per day</legend>
	{#each availableMessageCountPerDay as count, idx}
		<div class="radio-and-interval-wrap">
			<label for={count.toString()}>
				<input
					on:input={onInput}
					type="radio"
					id={count.toString()}
					name="messageFrequency"
					value={count}
					checked={count === reccomendedCount}
				/>
				{getLabel(count)}
			</label>
			{#if Number(selectedCount) === Number(count)}
				<SendTime selectedCount={count} />
			{/if}
		</div>
	{/each}
</fieldset>

<style>
	.radio-and-interval-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>

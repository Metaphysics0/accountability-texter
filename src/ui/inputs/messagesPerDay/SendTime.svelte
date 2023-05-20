<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { IAvailableCount } from './shared';

	export let selectedCount: IAvailableCount;

	const arrayFromSelectedCount = new Array(selectedCount).fill('_');

	function getInputLabelFromCount(count: number) {
		return `Msg ${count + 1} send time`;
	}
	function getInputNameFromCount(count: number) {
		return `message${count + 1}SendTime`;
	}
</script>

<div transition:fade>
	{#each arrayFromSelectedCount as count, idx}
		<label for={getInputNameFromCount(idx)}>
			<small>
				{getInputLabelFromCount(idx)}
			</small>
			<input type="time" name={getInputNameFromCount(idx)} min="09:00" max="18:00" />
		</label>
	{/each}
</div>

<style>
	div {
		display: flex;
	}
	input,
	label {
		width: min-content;
	}
	input {
		height: 12px;
		padding-left: 10px;
		padding-right: 10px;
	}
	label {
		text-align: center;
		margin-bottom: 0;
	}
	small {
		font-size: 12px;
	}
</style>

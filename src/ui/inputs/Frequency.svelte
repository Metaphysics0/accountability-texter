<script lang="ts">
	const availableMessageCountPerDay = [1, 2, 3];
	const reccomendedCount = 2;

	function getLabel(count: number): string {
		if (count === reccomendedCount) {
			return '2 (Reccomended)';
		}
		return count.toString();
	}
</script>

<fieldset>
	<legend>Messages per day</legend>
	{#each availableMessageCountPerDay as count}
		<label for={count.toString()}>
			<input
				type="radio"
				id={count.toString()}
				name="messageFrequency"
				value={count}
				checked={count === reccomendedCount}
			/>
			{getLabel(count)}
		</label>
	{/each}
</fieldset>

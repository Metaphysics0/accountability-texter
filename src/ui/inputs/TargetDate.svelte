<script lang="ts">
	function getCurrentDate(): string {
		const currentDate = new Date();
		currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset());
		return currentDate.toJSON().slice(0, 10);
	}
	const currentDate = getCurrentDate();
</script>

<label for="targetDate"
	>Target date
	<input type="date" id="targetDate" name="targetDate" value={currentDate} min={currentDate} />
</label>

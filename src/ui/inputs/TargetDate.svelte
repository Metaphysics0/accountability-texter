<script lang="ts">
	function getCurrentDate(): string {
		const currentDate = new Date();
		currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset());
		return currentDate.toJSON().slice(0, 10);
	}
	const currentDate = getCurrentDate();
</script>

<label for="targetDate"
	>3. Target date
	<small> (when you hope to complete your goal) </small>
	<input type="date" id="targetDate" name="targetDate" value={currentDate} min={currentDate} />
</label>

<style>
	small {
		opacity: 0.8;
	}
</style>

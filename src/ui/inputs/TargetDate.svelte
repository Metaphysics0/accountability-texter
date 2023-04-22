<script lang="ts">
	import { DateHelper } from '$lib/dateHelper';

	const dateOneMonthFromNow = DateHelper.getOneMonthFromNow();
	const currentDate = DateHelper.getCurrent();
</script>

<label for="targetDate"
	>Target date
	<small> (DD/MM/YYYY) </small>
	<input
		type="date"
		id="targetDate"
		name="targetDate"
		value={dateOneMonthFromNow}
		min={currentDate}
	/>
</label>

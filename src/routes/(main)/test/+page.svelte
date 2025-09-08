<script lang="ts">
	import { createName } from './data.remote';
</script>

<form {...createName}>
	<input type="text" name="name" />
	<button type="submit">Submit</button>
</form>

{#if createName.result?.greeting}
	<div>{createName.result.greeting}</div>
{/if}

<script>
	import { testFn } from './testFn';
</script>

<div>test</div>
<button>JS Error</button>

<button
	onclick={() => {
		throw new Error('Sentry Example Click Error');
	}}>Sentry Error</button
>

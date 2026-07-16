<script>
	import { testFn } from './testFn';
</script>

<button>JS Error</button>

<button
	onclick={() => {
		throw new Error('Sentry Example Click Error');
	}}>Sentry Error</button
>

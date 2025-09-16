<script>
	import { testFn } from './testFn';

	const handleOnClick = () => {
		testFn();

		// alert('test');
	};
</script>

<button onclick={handleOnClick}>JS Error</button>

<button
	onclick={() => {
		throw new Error('Sentry Example Click Error');
	}}>Sentry Error</button
>

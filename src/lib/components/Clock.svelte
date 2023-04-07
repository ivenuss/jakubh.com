<script lang="ts">
	import { onMount } from 'svelte';

	let time = new Date();

	$: hours = time.getHours();
	$: minutes = formatNumber(time.getMinutes());
	$: seconds = formatNumber(time.getSeconds());

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	const formatNumber = (number: number) => String('0' + number).slice(-2);
</script>

<time class="text-sm text-zinc-400 select-none">{hours}:{minutes}:{seconds}</time>

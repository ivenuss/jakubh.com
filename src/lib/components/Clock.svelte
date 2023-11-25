<script lang="ts">
	import { onMount } from 'svelte';
	import Description from './Description.svelte';

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

<Description as="time" class="select-none font-mono !text-[10px]">
	{hours}:{minutes}:{seconds}
</Description>

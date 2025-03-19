<script lang="ts">
	import Description from './Description.svelte';

	const formatNumber = (number: number) => String('0' + number).slice(-2);

	let time = $state(new Date());

	let hours = $derived(time.getHours());
	let minutes = $derived(formatNumber(time.getMinutes()));
	let seconds = $derived(formatNumber(time.getSeconds()));

	$effect(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<Description as="time" class="font-mono text-[10px]! select-none">
	{hours}:{minutes}:{seconds}
</Description>

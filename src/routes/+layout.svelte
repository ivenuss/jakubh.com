<script lang="ts">
	import '../app.css';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
	<script
		defer
		data-domain="jakubh.com"
		src="https://analytics.jakubh.com/js/script.outbound-links.js"
	></script>
</svelte:head>

{@render children?.()}

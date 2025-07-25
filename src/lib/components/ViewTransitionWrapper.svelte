<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		/** Name has to be unique for each transition */
		name: string;
		children: Snippet;
	};

	let { name, children }: Props = $props();
</script>

<span style="view-transition-name: {name}">
	{@render children()}
</span>

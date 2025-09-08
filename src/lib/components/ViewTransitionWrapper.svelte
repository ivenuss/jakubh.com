<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		/** Name has to be unique for each transition */
		name: string;
		class?: ClassValue;
		children: Snippet;
	};

	let { name, class: classes, children }: Props = $props();
</script>

<span style="view-transition-name: {name}" class={classes}>
	{@render children()}
</span>

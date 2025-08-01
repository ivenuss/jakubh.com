<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		class?: ClassValue;
		as?: 'p' | 'span' | 'div' | 'time';
		children: Snippet;
	};

	let { class: classes, as = 'p', children }: Props = $props();
</script>

<svelte:element this={as} class={['text-sm text-neutral-400', classes]}>
	{@render children()}
</svelte:element>

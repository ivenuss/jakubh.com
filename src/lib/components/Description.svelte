<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
		as?: 'p' | 'span' | 'div' | 'time';
		children: import('svelte').Snippet;
	}

	let { class: classes, as = 'p', children }: Props = $props();
</script>

<svelte:element this={as} class={cn('text-sm text-neutral-400', classes)}>
	{@render children()}
</svelte:element>

<script lang="ts">
	import Link from '../Link.svelte';
	import type { ClassValue } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	type Props = {
		href: string;
		class?: ClassValue;
		children?: Snippet;
	};

	let { href, class: classes, children }: Props = $props();

	let isActive = $derived(page.url.pathname === href);
</script>

<li class="contents">
	<Link
		{href}
		unstyled
		class={[
			'relative text-sm font-medium transition-colors focus-visible:ring-offset-0 md:inline-flex',
			isActive ? 'text-surface-50 underline' : 'text-surface-300 hover:text-surface-50',
			classes
		]}
	>
		{@render children?.()}
	</Link>
</li>

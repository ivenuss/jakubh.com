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
			isActive ? 'text-neutral-50 underline' : 'text-neutral-300',
			classes
		]}
	>
		{@render children?.()}
	</Link>
</li>

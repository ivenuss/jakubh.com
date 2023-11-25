<script lang="ts">
	import clsx from 'clsx';
	import Link from '../Link.svelte';
	import { page } from '$app/stores';

	export let cn = '';
	export { cn as class };
	export let href: string;

	$: isActive = $page.url.pathname === href;
</script>

<li>
	<Link
		{href}
		unstyled
		class={clsx(
			'relative p-0.5 text-sm font-medium transition-colors md:inline-flex',
			isActive ? 'text-neutral-50 underline' : 'text-neutral-300',
			cn
		)}
	>
		<slot />
	</Link>
</li>

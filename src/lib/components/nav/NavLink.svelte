<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';

	export let cn = '';
	export { cn as class };
	export let href: string;

	$: isActive = $page.url.pathname === href;
</script>

<li>
	<a
		{href}
		class={clsx(
			'relative flex rounded px-2 py-1 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-zinc-900 md:inline-flex',
			isActive
				? 'bg-neutral-100 text-neutral-800 dark:bg-zinc-900 dark:text-zinc-50'
				: 'text-neutral-700 dark:text-zinc-300',
			cn
		)}
	>
		<slot />
	</a>
</li>

<script lang="ts">
	import Link from '../Link.svelte';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils/cn';

	export let href: string;

	export let className = '';
	export { className as class };

	$: isActive = $page.url.pathname === href;
</script>

<li class="contents">
	<Link
		{href}
		unstyled
		class={cn(
			'relative text-sm font-medium transition-colors focus-visible:ring-offset-0 md:inline-flex',
			isActive ? 'text-neutral-50 underline' : 'text-neutral-300',
			className
		)}
	>
		<slot />
	</Link>
</li>

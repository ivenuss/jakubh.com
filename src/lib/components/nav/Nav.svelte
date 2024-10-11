<script>
	import { MenuIcon } from 'lucide-svelte';
	import Clock from '../Clock.svelte';
	import Link from '../Link.svelte';
	import Button from '../Button.svelte';
	import NavLink from './NavLink.svelte';
	import { beforeNavigate } from '$app/navigation';
	import { focusTrap } from '$lib/actions/focusTrap';
	import { cn } from '$lib/utils/cn';
	import { removeScroll } from '$lib/actions/removeScroll';

	let expanded = $state(false);

	beforeNavigate(() => {
		expanded = false;
	});

	const links = [
		{ href: '/', label: 'home' },
		{ href: '/about', label: 'about' },
		{ href: '/projects', label: 'projects' }
	];

	let tooltipTitle = $derived(`${expanded ? 'Close' : 'Open'} sidebar`);
</script>

{#if expanded}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		use:removeScroll={{ disable: false }}
		class="fixed bottom-0 left-0 right-0 top-0 z-10 bg-neutral-900/60 md:hidden"
		onclick={() => {
			expanded = false;
		}}
	></div>
{/if}

<nav class="relative z-10">
	<span
		class="fixed bottom-0 z-20 mx-auto w-screen bg-neutral-800 md:sticky md:top-0 md:mb-2 md:bg-neutral-900"
	>
		<span
			class="relative mx-auto flex h-16 w-full max-w-screen-sm items-center justify-between px-4 md:py-4"
		>
			<div class="flex w-full items-center gap-4">
				<Link unstyled href="/" class="flex items-center text-lg">
					<span class="font-bold">Jakub</span>H
				</Link>
				<Clock />
			</div>

			<ul class="ml-auto hidden items-center gap-3 md:flex">
				{#each links as { href, label }}
					<NavLink {href} class="px-0.5 py-0.5">{label}</NavLink>
				{/each}
			</ul>

			<Button
				title={tooltipTitle}
				aria-label={tooltipTitle}
				class="grid h-10 w-10 flex-none place-items-center rounded-full bg-neutral-800 p-1 text-white hover:bg-neutral-700 md:hidden"
				onclick={() => {
					expanded = !expanded;
				}}
			>
				<MenuIcon class="h-6 w-6" />
			</Button>
		</span>
	</span>

	<ul
		use:focusTrap={true}
		class={cn(
			'fixed bottom-16 left-0 right-0 flex w-screen transform flex-col rounded-t-xl border-b-2 border-black bg-neutral-800 transition-transform md:hidden',
			{ 'translate-y-[calc(100%_+_theme(spacing.16))]': !expanded }
		)}
	>
		{#each links as { href, label }, index}
			<NavLink
				{href}
				class={cn(
					'px-4 py-4 hover:bg-neutral-700 focus-visible:rounded-none focus-visible:ring-inset focus-visible:ring-offset-0',
					{ 'rounded-t-xl focus-visible:rounded-t-xl': index === 0 }
				)}
			>
				<span class="mx-auto flex max-w-screen-sm px-4">{label}</span>
			</NavLink>
		{/each}
	</ul>
</nav>

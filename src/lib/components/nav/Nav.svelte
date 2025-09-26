<script lang="ts">
	import NavLink from './NavLink.svelte';
	import Clock from '../Clock.svelte';
	import Link from '../Link.svelte';
	import { MenuIcon } from 'lucide-svelte';
	import { beforeNavigate } from '$app/navigation';
	import { focusTrap } from '$lib/actions/focusTrap';
	import { removeScroll } from '$lib/actions/removeScroll';
	import { resolve } from '$app/paths';

	let expanded = $state(false);

	beforeNavigate(() => {
		expanded = false;
	});

	const links = [
		{ href: resolve('/'), label: 'home' },
		{ href: resolve('/(main)/about'), label: 'about' },
		{ href: resolve('/(main)/projects'), label: 'projects' }
	];

	let tooltipTitle = $derived(`${expanded ? 'Close' : 'Open'} menu`);
</script>

{#if expanded}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		use:removeScroll={{ disable: false }}
		class="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/60 md:hidden"
		onclick={() => {
			expanded = false;
		}}
	></div>
{/if}

<nav class="relative z-10 mb-2.5">
	<span
		class="fixed inset-4 top-[unset] right-6 left-6 z-100 mx-auto rounded-3xl border border-white/5 bg-surface-800/90 backdrop-blur md:sticky md:top-0 md:mb-2 md:w-screen md:rounded-none md:border-none md:bg-surface-900"
	>
		<span
			class="relative mx-auto flex h-16 w-full max-w-(--breakpoint-sm) items-center justify-between px-4 md:py-4"
		>
			<div class="flex w-full items-center gap-4">
				<Link unstyled href={resolve('/')} class="flex items-center text-lg">
					<span class="font-bold">Jakub</span>H
				</Link>
				<Clock class="hidden md:block" />
			</div>

			<ul class="ml-auto hidden items-center gap-4 md:flex">
				{#each links as { href, label }}
					<NavLink {href} class="lg:-m-2 lg:px-2 lg:py-1">{label}</NavLink>
				{/each}
			</ul>

			<button
				title={tooltipTitle}
				aria-label={tooltipTitle}
				class="grid aspect-square size-10! flex-none place-items-center rounded-full p-1 text-white hover:bg-surface-700 md:hidden"
				onclick={() => {
					expanded = !expanded;
				}}
			>
				<MenuIcon class="size-7" />
			</button>
		</span>
	</span>

	<ul
		use:focusTrap={true}
		class={[
			'fixed right-6 bottom-24 left-6 flex transform flex-col overflow-hidden rounded-2xl border-b-2 border-black bg-surface-800 transition-transform md:hidden',
			{ 'translate-y-[calc(100%+(--spacing(24)))]': !expanded }
		]}
	>
		{#each links as { href, label }}
			<NavLink
				{href}
				class="px-4 py-4 hover:bg-surface-700 focus-visible:rounded-none focus-visible:ring-offset-0 focus-visible:ring-inset active:bg-surface-700"
			>
				<span class="mx-auto flex max-w-(--breakpoint-sm)">{label}</span>
			</NavLink>
		{/each}
	</ul>
</nav>

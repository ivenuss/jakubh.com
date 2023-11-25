<script>
	import Transition from 'svelte-transition';
	import { MenuIcon } from 'lucide-svelte';
	import Clock from '../Clock.svelte';
	import Link from '../Link.svelte';
	import NavLink from './NavLink.svelte';
	import { removeScroll } from '$lib/actions/removeScroll';
	import { beforeNavigate } from '$app/navigation';

	let expanded = false;

	const links = [
		{ href: '/', label: 'home' },
		{ href: '/about', label: 'about' },
		{ href: '/projects', label: 'projects' }
	];

	beforeNavigate(() => {
		expanded = false;
	});
</script>

<nav
	class="sticky top-0 z-50 mx-auto mb-2 flex w-full max-w-screen-sm items-center justify-between bg-neutral-900 px-4 py-4"
>
	<div class="flex items-center gap-4">
		<Link unstyled class="flex items-center text-lg" href="/">
			<span class="font-bold">Jakub</span>H
		</Link>
		<Clock />
	</div>

	<ul class="ml-auto hidden items-center gap-3 md:flex">
		{#each links as { href, label }}
			<NavLink {href}>{label}</NavLink>
		{/each}
	</ul>

	<button
		title={expanded ? 'Close sidebar' : 'Open sidebar'}
		aria-label={expanded ? 'Close sidebar' : 'Open sidebar'}
		on:click={() => (expanded = !expanded)}
		class="block p-1 md:hidden"
	>
		<MenuIcon class="h-6 w-6" />
	</button>
</nav>

<Transition show={expanded}>
	<div use:removeScroll={{ disable: !expanded }} class="fixed inset-0 top-16 z-50 flex md:hidden">
		<Transition
			enter="transition ease-in-out duration-300 transform"
			enterFrom="translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-300 transform"
			leaveFrom="translate-x-0"
			leaveTo="translate-x-full"
		>
			<aside class="h-full w-full bg-zinc-950">
				<ul class="mx-auto flex max-w-screen-sm flex-col gap-1.5 px-4">
					{#each links as { href, label }}
						<NavLink {href} class="px-3.5 py-2.5 text-base">{label}</NavLink>
					{/each}
				</ul>
			</aside>
		</Transition>
	</div>
</Transition>

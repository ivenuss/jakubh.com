<script>
	import Transition from 'svelte-transition';
	import MenuIcon from '../svg/icons/menu.svg?component';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
	import NavLink from './NavLink.svelte';
	import { afterNavigate } from '$app/navigation';

	let expanded = false;

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/contact', label: 'Contact' }
	];

	afterNavigate(() => {
		expanded = false;
	});
</script>

<nav class="mx-auto mb-2 flex w-full max-w-screen-sm items-center justify-between px-4 py-4">
	<div class="flex items-center gap-4">
		<a class="flex items-center" href="/">
			<div class="text-lg">
				<span class="font-bold">Jakub</span><span>H</span>
			</div>
		</a>
		<ThemeSwitcher />
	</div>

	<ul class="ml-auto hidden items-center gap-1.5 md:flex">
		{#each links as { href, label }}
			<NavLink {href}>{label}</NavLink>
		{/each}
	</ul>

	<button on:click={() => (expanded = !expanded)} class="block p-1 md:hidden">
		<MenuIcon class="h-6 w-6" />
	</button>
</nav>

<div class="absolute bottom-0 left-0 right-0 top-16 z-50 block md:hidden">
	<Transition show={expanded}>
		<Transition
			enter="transition ease-in-out duration-300 transform"
			enterFrom="translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-300 transform"
			leaveFrom="translate-x-0"
			leaveTo="translate-x-full"
		>
			<aside class="h-full w-full bg-white dark:bg-black">
				<ul class="mx-auto flex max-w-screen-sm flex-col gap-1.5 px-4">
					{#each links as { href, label }}
						<NavLink {href} class="px-3.5 py-2.5 text-base">{label}</NavLink>
					{/each}
				</ul>
			</aside>
		</Transition>
	</Transition>
</div>

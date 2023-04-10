<script>
	import Transition from 'svelte-transition';
	import Clock from '../Clock.svelte';
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

<nav class="mx-auto mb-2 w-full flex items-center justify-between max-w-screen-sm px-4 py-4">
	<div class="flex items-center gap-3">
		<a class="flex items-center" href="/">
			<div class="text-lg">
				<span class="font-bold">Jakub</span><span>H</span>
			</div>
		</a>
		<ThemeSwitcher />
		<Clock />
	</div>

	<ul class="ml-auto hidden md:flex items-center gap-1.5">
		{#each links as { href, label }}
			<NavLink {href}>{label}</NavLink>
		{/each}
	</ul>

	<button on:click={() => (expanded = !expanded)} class="block md:hidden p-1">
		<MenuIcon class="w-6 h-6" />
	</button>
</nav>

<div class="block md:hidden absolute top-16 left-0 right-0 bottom-0 z-50">
	<Transition show={expanded}>
		<Transition
			enter="transition ease-in-out duration-300 transform"
			enterFrom="translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-300 transform"
			leaveFrom="translate-x-0"
			leaveTo="translate-x-full"
		>
			<aside class="w-full h-full bg-white dark:bg-black">
				<ul class="flex flex-col gap-1.5 px-4 mx-auto max-w-screen-sm">
					{#each links as { href, label }}
						<NavLink {href} class="py-2.5 px-3.5 text-base">{label}</NavLink>
					{/each}
				</ul>
			</aside>
		</Transition>
	</Transition>
</div>

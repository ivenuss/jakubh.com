<script>
	import Clock from '../Clock.svelte';
	import MenuIcon from '../svg/icons/menu.svg?component';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
	import NavLink from './NavLink.svelte';
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
		<NavLink href="/">Home</NavLink>
		<NavLink href="/about">About</NavLink>
		<NavLink href="/projects">Projects</NavLink>
		<NavLink href="/contact">Contact</NavLink>
	</ul>

	<button on:click class="block md:hidden p-1">
		<MenuIcon class="w-6 h-6" />
	</button>
</nav>

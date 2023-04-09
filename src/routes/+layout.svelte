<script lang="ts">
	import '../app.css';
	import Transition from 'svelte-transition';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '../lib/components/nav/Nav.svelte';

	let expanded = false;
</script>

<div class="relative flex min-h-screen flex-col">
	<Nav on:click={() => (expanded = !expanded)} />

	<Transition show={expanded}>
		<Transition
			enter="transition ease-in-out duration-300 transform"
			enterFrom="translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-300 transform"
			leaveFrom="translate-x-0"
			leaveTo="translate-x-full"
		>
			<div class="absolute top-16 left-0 right-0 bottom-0 px-4 z-50 bg-white dark:bg-black">
				Lorem ipsum dolor sit.
			</div>
		</Transition>
	</Transition>

	<div class="relative mb-auto">
		<main class="mx-auto max-w-screen-sm px-4 w-full">
			<slot />
		</main>
	</div>

	<Footer />
</div>

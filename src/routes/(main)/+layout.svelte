<script>
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
</script>

<div class="relative flex min-h-screen flex-col">
	<Nav />

	<div class="relative mb-auto mt-10 md:mt-0">
		<main class="mx-auto w-full max-w-screen-sm px-4">
			<slot />
		</main>
	</div>

	<Footer />
</div>

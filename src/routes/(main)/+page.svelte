<script lang="ts">
	import Contact from './_components/Contact.svelte';
	import Hero from './_components/Hero.svelte';
	import Projects from './_components/Projects.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<div class="flex flex-col gap-16">
	<Hero />
	<Projects />
	<Contact />
</div>

<Seo title="Jakub Habrcetl / Web developer & designer" />

<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Contact from './Contact.svelte';
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
</script>

<div class="flex flex-col gap-16">
	<Hero />
	<Projects />
	<Contact />
</div>

<Seo title="Jakub Habrcetl / Web developer & designer" />

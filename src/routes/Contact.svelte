<script>
	import Button from '$lib/components/Button.svelte';
	import Description from '$lib/components/Description.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
</script>

<section>
	<Headline level="3" class="mb-2.5">Did I catch your attention?</Headline>

	<Description class="mb-5">
		Do you have a question, problem or idea that I can help you with? Do not hesitate to contact me.
	</Description>

	<div class="flex items-center gap-6">
		<Button href="/contact">Get in Touch</Button>

		<a
			href="mailto:hello@jakubh.com"
			class="font-medium text-zinc-500 hover:underline dark:text-zinc-400"
		>
			hello@jakubh.com
		</a>
	</div>
</section>

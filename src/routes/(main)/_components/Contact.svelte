<script>
	import Description from '$lib/components/Description.svelte';
	import Link from '$lib/components/Link.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import { EMAIL } from '$lib/constants';
</script>

<section>
	<Headline level="3" class="mb-2.5">Get in touch</Headline>
	<Description class="mb-5">
		Do you have a question, problem or idea that I can help you with? Do not hesitate to contact me.
	</Description>
	<div class="flex items-center gap-6">
		<Link
			href="mailto:{EMAIL}"
			class="font-medium text-neutral-400 underline hover:text-white hover:underline"
		>
			{EMAIL}
		</Link>
	</div>
</section>

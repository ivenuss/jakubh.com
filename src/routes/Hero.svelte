<script>
	import Description from '$lib/components/Description.svelte';
</script>

<section class="flex flex-col gap-6">
	<div class="flex items-center gap-4">
		<div class="relative h-14 w-14">
			<img src="/images/profile_pic.png" alt="Profile" class="absolute h-14 w-14 rounded-lg" />
			<span
				class="absolute [animation:_ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] inline-flex -z-[1] top-2 left-2 right-2 bottom-2 rounded-lg bg-zinc-400 opacity-75"
			/>
		</div>

		<div>
			<h1 class="text-xl font-medium">Jakub Habrcetl</h1>
			<Description>Frontend developer, UI & UX Designer</Description>
		</div>
	</div>

	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit.</p>
</section>

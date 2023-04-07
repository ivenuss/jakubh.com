<script lang="ts">
	const sections = [
		{
			title: 'Explore',
			items: [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' }
			]
		},
		{
			title: 'Social'
			/* items: socialMedias.map(({ title, icon, link: path }) => ({
        title,
        icon,
        path
      })) */
		},
		{
			title: 'My Work',
			items: [{ title: 'Projects', path: '/projects' }]
		}
	];
</script>

<footer class="flex w-full flex-col px-6 pt-16">
	<!-- 	<ul class="mx-auto grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
		{#each sections as section}
			<li class="flex flex-col items-start">
				<span class="text-secondary-200 mb-4 text-lg dark:text-zinc-400">
					{section.title}
				</span>
				<ul class="flex flex-col">
					{#each section.items ?? [] as item}
						<li>
							<a
								href={item.path}
								class="mb-2 flex items-center gap-1.5 text-black hover:underline dark:text-zinc-50"
							>
								<span>{item.title}</span>
							</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul> -->
	<div class="mx-auto mt-14 flex flex-col items-center pb-12">
		<span class="text-secondary-300 mt-2 text-sm dark:text-zinc-400">
			© {new Date().getFullYear()} jakubh.com
		</span>
	</div>
</footer>

<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
	import Description from '$lib/components/Description.svelte';
</script>

<section>
	<Headline level="2" class="mb-4">About Me</Headline>
	<div class="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
		<div class="flex flex-col gap-4 md:flex-1">
			<Description class="text-base leading-relaxed">
				Hey, I'm Jakub – a passionate web developer and designer based in the Czech Republic. 
				I specialize in creating exceptional user interfaces and experiences that combine 
				beautiful design with functional, accessible code.
			</Description>
			
			<Description class="leading-relaxed">
				My journey in web development started in 2019, and since then I've been constantly 
				learning and evolving. I love the intersection of technology and design, where 
				I can bring creative ideas to life through clean, modern code.
			</Description>
			
			<Description class="leading-relaxed">
				When I'm not coding, you'll find me exploring new design trends, contributing to 
				open-source projects, or experimenting with the latest web technologies. I believe 
				in building products that not only look great but also provide meaningful value 
				to users.
			</Description>
			
			<div class="mt-2 flex flex-col gap-2">
				<Description class="font-medium text-zinc-300">What drives me:</Description>
				<ul class="space-y-1 text-sm text-zinc-400">
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-sky-500"></span>
						Creating intuitive and accessible user experiences
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-sky-500"></span>
						Writing clean, maintainable, and scalable code
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-sky-500"></span>
						Staying up-to-date with modern web technologies
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-sky-500"></span>
						Collaborating with teams to build amazing products
					</li>
				</ul>
			</div>
		</div>
		
		<div class="flex justify-center md:justify-end">
			<div
				class="relative h-32 w-32 flex-none overflow-hidden rounded-2xl ring-2 ring-sky-900/50 transition-all duration-300 hover:ring-sky-700/70 hover:scale-105"
			>
				<img 
					loading="eager" 
					alt="Jakub Habrcetl - Web Developer & Designer" 
					src="/images/profile_pic.jpg" 
					class="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0" 
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
			</div>
		</div>
	</div>
</section>

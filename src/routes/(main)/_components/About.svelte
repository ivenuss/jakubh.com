<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
	import Description from '$lib/components/Description.svelte';
	import Link from '$lib/components/Link.svelte';
	import { resolve } from '$app/paths';
	import { socialMedias } from '$lib/constants';
</script>

<section class="flex flex-col gap-6">
	<div class="flex flex-col gap-4">
		<Headline level="2" class="mb-2">About Me</Headline>
		
		<div class="flex flex-col gap-6 md:flex-row md:items-start">
			<div class="flex flex-col gap-4 md:flex-1">
				<Description class="text-base leading-relaxed">
					Hey, I'm Jakub – a passionate web developer and designer who loves crafting exceptional user experiences. 
					I specialize in building modern, responsive web applications with a keen eye for design and usability.
				</Description>
				
				<Description class="leading-relaxed">
					With expertise spanning frontend development, UI/UX design, and graphic design, I bring a unique 
					perspective to every project. I'm currently working as a Frontend Developer at CDN77, where I help 
					build scalable web solutions.
				</Description>
				
				<div class="flex flex-col gap-3">
					<Description class="font-medium text-zinc-300">What I do:</Description>
					<ul class="grid grid-cols-1 gap-2 text-sm text-zinc-400 md:grid-cols-2">
						<li class="flex items-center gap-2">
							<span class="size-1.5 rounded-full bg-sky-500"></span>
							Frontend Development
						</li>
						<li class="flex items-center gap-2">
							<span class="size-1.5 rounded-full bg-sky-500"></span>
							UI/UX Design
						</li>
						<li class="flex items-center gap-2">
							<span class="size-1.5 rounded-full bg-sky-500"></span>
							Graphic Design
						</li>
						<li class="flex items-center gap-2">
							<span class="size-1.5 rounded-full bg-sky-500"></span>
							Web Applications
						</li>
					</ul>
				</div>
				
				<div class="flex items-center gap-4">
					<Link href={resolve('/(main)/about')} class="font-medium">
						Learn more about me →
					</Link>
					
					<div class="flex items-center gap-3">
						{#each socialMedias.slice(0, 3) as social}
							<Link 
								href={social.link} 
								class="text-zinc-400 transition-colors hover:text-zinc-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svelte:component this={social.icon} class="size-4" />
								<span class="sr-only">{social.title}</span>
							</Link>
						{/each}
					</div>
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
	</div>
</section>
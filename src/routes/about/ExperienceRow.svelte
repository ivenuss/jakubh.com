<script lang="ts" context="module">
	import { intervalToDuration } from 'date-fns';

	const pluralize = (count: number, noun: string, suffix = 's') =>
		`${noun}${count !== 1 ? suffix : ''}`;

	// Write me a function that takes start and end dates and returns a string like "1 yr 2 mo"
	export function formatDuration(startDate: Date, endDate: Date) {
		const { years, months, days } = intervalToDuration({
			start: startDate,
			end: endDate
		});

		const parts = [];

		if (years) {
			parts.push(`${years} ${pluralize(years, 'yr')}`);
		}

		if (months) {
			parts.push(`${months} ${pluralize(months, 'mo')}`);
		}

		if (days) {
			parts.push(`${days} ${pluralize(days, 'day')}`);
		}

		return parts.join(' ');
	}
</script>

<script lang="ts">
	import { format } from 'date-fns';
	import type { ComponentType } from 'svelte';

	export let companyName: string;
	export let companyLogo: ComponentType;
	export let companyColor: string;
	export let companySite: string;
	export let employmentType: string;
	export let title: string;
	export let startDate: string;
	export let endDate: string | undefined = undefined;

	const DATE_FORMAT = 'MMM yyyy';
	const duration = formatDuration(new Date(startDate), endDate ? new Date(endDate) : new Date());
</script>

<div id="2022-12-15" aria-labelledby="2022-12-15-heading" class="md:flex">
	<div class="relative pl-7 pt-2 md:w-3/4 md:pl-10 md:pt-0 pb-12 last:pb-8 ml-4">
		<div class="absolute bottom-0 left-0 w-px bg-slate-200 dark:bg-zinc-700 -top-6 md:top-0" />
		<div
			class="absolute -left-1 -top-[1.0625rem] h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-neutral-300 dark:border-zinc-700 bg-white dark:bg-black md:top-[0.4375rem]"
		/>
		<div
			class="max-w-none prose-h3:mb-4 prose-h3:text-base prose-h3:leading-6 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600"
		>
			<h3 class="mb-3 flex items-center gap-3">
				<div class="p-2 rounded-lg" style="background-color: {companyColor}22;">
					<svelte:component this={companyLogo} class="h-5 w-5" />
				</div>

				<a
					href={companySite}
					title={companyName}
					class="text-base text-neutral-900 dark:text-zinc-50 font-medium">{companyName}</a
				>
			</h3>

			<div>
				<div class="mb-2">
					<h4 class="mb-0.5 text-base font-medium text-neutral-900 dark:text-zinc-50">
						{title} · {employmentType}
					</h4>
					<div class="text-sm text-zinc-400 dark:text-zinc-400">
						<span>{format(new Date(startDate), DATE_FORMAT)}</span>
						{' - '}
						{endDate ? format(new Date(endDate), DATE_FORMAT) : 'Present'}
						{duration ? ' · ' + duration : null}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

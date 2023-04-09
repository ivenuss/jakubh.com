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

<div id="2022-12-15" aria-labelledby="2022-12-15-heading" class="flex flex-col">
	<h3 class="mb-3 flex items-center gap-3">
		<div class="p-2 rounded-lg" style="background-color: {companyColor}22;">
			<svelte:component this={companyLogo} class="h-5 w-5" />
		</div>

		<a
			href={companySite}
			title={companyName}
			class="text-base text-neutral-900 dark:text-zinc-50 font-medium hover:underline"
			>{companyName}</a
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

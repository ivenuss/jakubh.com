<script lang="ts" module>
	import { intervalToDuration } from 'date-fns';

	const pluralize = (count: number, noun: string, suffix = 's') =>
		`${noun}${count !== 1 ? suffix : ''}`;

	export const formatDuration = (start: Date, end: Date) => {
		const { years, months, days } = intervalToDuration({ start, end });

		return [
			years && `${years} ${pluralize(years, 'yr')}`,
			months && `${months} ${pluralize(months, 'mo')}`,
			days && `${days} ${pluralize(days, 'day')}`
		]
			.filter(Boolean)
			.join(' ');
	};
</script>

<script lang="ts">
	import { format } from 'date-fns';
	import type { Component } from 'svelte';
	import Description from '$lib/components/Description.svelte';
	import Link from '$lib/components/Link.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';

	interface Props {
		companyName: string;
		companyLogo: Component;
		companyColor: string;
		companySite: string;
		employmentType: string;
		title: string;
		startDate: string;
		endDate?: string;
	}

	let {
		companyName,
		companyLogo: CompanyLogo,
		companyColor,
		companySite,
		employmentType,
		title,
		startDate,
		endDate
	}: Props = $props();

	const DATE_FORMAT = 'MMM yyyy';

	const duration = formatDuration(new Date(startDate), endDate ? new Date(endDate) : new Date());
</script>

<li class="flex flex-col">
	<div class="mb-3 flex items-center gap-3">
		<div class="rounded-lg p-2" style="background-color: {companyColor}22;">
			<CompanyLogo class="h-5 w-5" />
		</div>

		<Link href={companySite} title={companyName} class="text-base font-medium hover:underline">
			{companyName}
		</Link>
	</div>

	<div class="mb-2">
		<Headline level="3" class="mb-0.5 text-base!">
			{title} · {employmentType}
		</Headline>
		<Description as="div" class="text-xs text-neutral-400">
			<span>{format(new Date(startDate), DATE_FORMAT)}</span>
			-
			{endDate ? format(new Date(endDate), DATE_FORMAT) : 'Present'}
			{duration ? ' · ' + duration : null}
		</Description>
	</div>
</li>

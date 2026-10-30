<script lang="ts" module>
	import { Temporal } from 'temporal-polyfill';
	import { pluralize } from '#lib/utils/pluralize.js';

	export const formatDuration = (start: Temporal.PlainDate, end: Temporal.PlainDate) => {
		const { years, months, days } = start.until(end, { largestUnit: 'years' });

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
	import Description from '#lib/components/Description.svelte';
	import Link from '#lib/components/Link.svelte';
	import Headline from '#lib/components/nav/Headline.svelte';
	import type { Component } from 'svelte';

	type Props = {
		companyName: string;
		companyLogo: Component;
		companyColor: string;
		companySite: string;
		employmentType: string;
		title: string;
		startDate: string;
		endDate?: string;
	};

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

	const formatDate = (date: string) =>
		Temporal.PlainDate.from(date).toLocaleString('en-US', {
			month: 'short',
			year: 'numeric'
		});

	const duration = $derived(
		formatDuration(
			Temporal.PlainDate.from(startDate),
			endDate ? Temporal.PlainDate.from(endDate) : Temporal.Now.plainDateISO()
		)
	);
</script>

<li class="flex flex-col">
	<div class="mb-3 flex items-center gap-3">
		<div class="rounded-lg p-2" style="background-color: {companyColor}22;">
			<CompanyLogo class="size-5" />
		</div>

		<Link href={companySite} title={companyName} class="text-base font-medium hover:underline">
			{companyName}
		</Link>
	</div>

	<div class="mb-2">
		<Headline level="3" class="mb-0.5 text-base!">
			{title} · {employmentType}
		</Headline>
		<Description as="div" class="text-xs text-surface-400">
			<span>{formatDate(startDate)}</span>
			-
			{endDate ? formatDate(endDate) : 'Present'}
			{duration ? ' · ' + duration : null}
		</Description>
	</div>
</li>

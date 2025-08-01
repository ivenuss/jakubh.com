import type { Component } from 'svelte';

/**
 * Projects
 */
export type Project = {
	slug: string;
	title: string;
	publishedAt: string;
	description: string;
	preview: string;
	owner: string;
	repo: string;
	stack: string[];
	component: Component;
};

import type { PageLoad } from './$types';
import { getProjects } from '#lib/utils/getProjects.js';

export const load = (async () => ({
	projects: await getProjects()
})) satisfies PageLoad;

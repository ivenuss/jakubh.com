import type { PageLoad } from './$types';
import { getProjects } from '$lib/utils/getProjects';

export const load = (async () => ({
	projects: await getProjects()
})) satisfies PageLoad;

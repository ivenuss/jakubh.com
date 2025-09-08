import { form } from '$app/server';

export const createName = form(async (data) => {
	const name = data.get('name');

	return { greeting: `Hello ${name}` };
});

import type { Action } from 'svelte/action';

type Params = {
	disable?: boolean;
};

export const removeScroll = ((node, params) => {
	const update = (params: Params) => {
		if (
			document.body.clientHeight > window.innerHeight &&
			window.getComputedStyle(document.body).overflowY !== 'hidden'
		) {
			if (!params.disable) document.body.style.top = `-${window.scrollY}px`;
			document.body.style.position = params.disable ? '' : 'fixed';
			document.body.style.overflowY = params.disable ? '' : 'scroll';
			document.body.style.width = params.disable ? '' : '100%';

			if (params.disable) {
				const top = Number(document.body.style.top.replace('-', '').replace('px', ''));
				document.body.style.removeProperty('top');
				window.scrollTo(window.scrollX, top);
			}
		}
	};

	update(params);

	return {
		update,
		destroy() {
			update({ disable: true });
		}
	};
}) satisfies Action;

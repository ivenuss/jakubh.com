type RemoveScrollOptions = {
	disable?: boolean;
};

export const removeScroll = (_: HTMLElement, options: RemoveScrollOptions) => {
	const update = (options: RemoveScrollOptions) => {
		if (
			document.body.clientHeight > window.innerHeight &&
			window.getComputedStyle(document.body).overflowY !== 'hidden'
		) {
			if (!options.disable) document.body.style.top = `-${window.scrollY}px`;
			document.body.style.position = options.disable ? '' : 'fixed';
			document.body.style.overflowY = options.disable ? '' : 'scroll';
			document.body.style.width = options.disable ? '' : '100%';

			if (options.disable) {
				const top = Number(document.body.style.top.replace('-', '').replace('px', ''));
				document.body.style.removeProperty('top');
				window.scrollTo(window.scrollX, top);
			}
		}
	};

	update(options);

	return {
		update,
		destroy() {
			update({ disable: true });
		}
	};
};

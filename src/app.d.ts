// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface MdsvexFile {
			default: import('svelte/internal').SvelteComponent;
			metadata: Record<string, string>;
		}

		type MdsvexResolver = () => Promise<MdsvexFile>;

		// https://github.com/poppa/sveltekit-svg#typescript
		declare module '*.svg?component' {
			import type { ComponentType, SvelteComponentTyped } from 'svelte';
			import type { SVGAttributes } from 'svelte/elements';

			const content: ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>;

			export default content;
		}

		declare module '*.svg?url' {
			const content: string;
			export default content;
		}
	}
}

export {};

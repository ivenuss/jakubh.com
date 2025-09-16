// eslint-disable-next-line @typescript-eslint/no-explicit-any
const items: any[] = [undefined];

export function testFn(): boolean {
	return items.find((item) => item.aha === 'test') !== undefined;
}

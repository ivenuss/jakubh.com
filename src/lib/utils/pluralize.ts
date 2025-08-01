export const pluralize = (count: number, noun: string, suffix = 's') =>
	`${noun}${count !== 1 ? suffix : ''}`;

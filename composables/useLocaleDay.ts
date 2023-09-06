export const useLocaleDay = (time: string): string => {
	return new Date(time).toLocaleString('en-US', { weekday: 'short' })
}

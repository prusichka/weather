export const useLocaleHours = (time: string): string => {
	return new Date(time).toLocaleString('en-US', {
		hour: '2-digit',
		hour12: true,
		minute: '2-digit',
	})
}

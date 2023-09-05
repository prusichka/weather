import { defineStore } from 'pinia'
import { ResponseLocationsFound, ReceivedWeatherData } from '~/interfaces'

export const useSearchStore = defineStore('search', {
	state() {
		return {
			currentLocationWeather: {} as ReceivedWeatherData,
			foundLocations: [] as ResponseLocationsFound[],
		}
	},
	actions: {
		clearFoundLocationsData() {
			this.foundLocations = [] as ResponseLocationsFound[]
		},
		async searchLocation(searchValue: string): Promise<void> {
			const config = useRuntimeConfig()
			const data: ResponseLocationsFound[] = await $fetch(
				`${config.public.apiBase}/search.json`,
				{
					method: 'GET',
					params: {
						key: config.public.apiSecret,
						q: searchValue,
					},
				}
			)
			this.foundLocations = data
		},
		async getCurrentLocationWeather(locationUrl: string): Promise<void> {
			const config = useRuntimeConfig()
			const data: ReceivedWeatherData = await $fetch(
				`${config.public.apiBase}/current.json`,
				{
					method: 'GET',
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
					params: {
						key: config.public.apiSecret,
						q: locationUrl,
						aqi: 'no',
					},
				}
			)
			this.currentLocationWeather = data
		},
	},
})

import { defineStore } from 'pinia'
import { ResponseLocation, CurrentLocation } from '~/interfaces'

export const useSearchStore = defineStore('search', {
	state() {
		return {
			currentLocationWeather: {} as CurrentLocation,
			foundLocations: [] as ResponseLocation[],
		}
	},
	actions: {
		clearFoundLocationsData() {
			this.foundLocations = [] as ResponseLocation[]
		},
		async searchLocation(searchValue: string): Promise<void> {
			const config = useRuntimeConfig()
			const data: ResponseLocation[] = await $fetch(
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
			const data: CurrentLocation = await $fetch(
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

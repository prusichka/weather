import { defineStore } from 'pinia'
import {
	ResponseLocationsFound,
	ResponseWeatherLocation,
	ResponseWeatherInformation,
	ResponseWeatherForecastBody,
	ResponseWeatherForecastDay,
} from '~/interfaces'

export const useSearchStore = defineStore('search', {
	state() {
		return {
			currentLocationWeather: {} as ResponseWeatherForecastBody,
			foundLocations: [] as ResponseLocationsFound[],
		}
	},
	getters: {
		hasWeatherData({ currentLocationWeather }): boolean {
			return !!Object.keys(currentLocationWeather).length
		},
		location({ currentLocationWeather }): ResponseWeatherLocation {
			return currentLocationWeather.location
		},
		weatherInfo({ currentLocationWeather }): ResponseWeatherInformation {
			return currentLocationWeather.current
		},
		forecastToDay({ currentLocationWeather }) {
			return currentLocationWeather.forecast.forecastday[0].day
		},
		forecastToDayHours({ currentLocationWeather }) {
			return currentLocationWeather.forecast.forecastday[0].hour
		},
		forecastToDayHoursShort({ currentLocationWeather }) {
			return currentLocationWeather.forecast.forecastday[0].hour
				.filter((el, _idx) => _idx % 3 === 0)
				.slice(2, -1)
		},
	},
	actions: {
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
		async getForecastLocationWeather(locationUrl: string): Promise<void> {
			const config = useRuntimeConfig()
			const data: ResponseWeatherForecastBody = await $fetch(
				`${config.public.apiBase}/forecast.json`,
				{
					method: 'GET',
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
					params: {
						key: config.public.apiSecret,
						q: locationUrl,
						aqi: 'no',
						days: 1,
						alerts: 'no',
					},
				}
			)
			this.currentLocationWeather = data
		},
		clearFoundLocationsData() {
			this.foundLocations = [] as ResponseLocationsFound[]
		},
	},
	persist: {
    storage: persistedState.localStorage,
  },
})

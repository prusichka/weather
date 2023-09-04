import { defineStore } from 'pinia'
import { ResponseLocation } from '~/interfaces'

export const useSearchStore = defineStore('search', {
	state() {
		return {}
	},
	actions: {
		async searchLocation(searchValue: string): Promise<ResponseLocation[]> {
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
			return data
		},
	},
})

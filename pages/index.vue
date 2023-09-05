<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
import {
	ResponseWeatherLocation,
	ResponseWeatherInformation,
} from '~/interfaces'

const store = useSearchStore()

const hasWeatherData: ComputedRef<boolean> = computed(
	() => !!Object.keys(store.currentLocationWeather).length
)
const location: ComputedRef<ResponseWeatherLocation> = computed(
	() => store.currentLocationWeather.location
)
const weatherInfo: ComputedRef<ResponseWeatherInformation> = computed(
	() => store.currentLocationWeather.current
)
</script>
<template>
	<Title>Weather</Title>
	<div class="w-full h-full bg-transparent">
		<div
			class="w-full min-h-[600px] h-auto select-none relative bg-white text-slate-100 bg-opacity-5 p-5 md:p-10">
			<div v-if="hasWeatherData"></div>
			<NoDataAvailable v-else />
		</div>
	</div>
</template>

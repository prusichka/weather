<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
</script>
<template>
	<Title>Weather</Title>
	<div class="w-full h-full bg-transparent">
		<div
			class="w-full min-h-[600px] h-auto relative bg-white text-slate-100 bg-opacity-5 rounded-lg p-3 md:p-10">
			<ClientOnly>
				<WeatherData v-if="store.hasWeatherData" />
				<NoDataAvailable v-else />
			</ClientOnly>
		</div>
	</div>
</template>

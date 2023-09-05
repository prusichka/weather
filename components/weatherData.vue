<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
function getLocaleHours(time: string) {
	return new Date(time).toLocaleString('en-US', {
		hour: '2-digit',
		hour12: true,
		minute: '2-digit',
	})
}
</script>
<template>
	<div class="w-full h-full bg-transparent grid grid-cols-3 gap-5">
		<div class="h-full col-span-3 md:col-span-2 flex flex-col">
			<!-- Main info -->
			<div class="p-2 mb-4 flex items-start justify-between w-full">
				<div class="w-full flex flex-col">
					<h2 class="text-[24px]">
						{{ store.location.name }}
					</h2>
					<h3>{{ store.weatherInfo.temp_c }}°</h3>
					<h4 class="text-gray-700 text-[10px]">
						Feels like: {{ store.weatherInfo.feelslike_c }}°
						<span class="pl-2 text-gray-300">{{
							getLocaleHours(store.location.localtime)
						}}</span>
					</h4>
				</div>
				<div>
					<img
						:src="store.weatherInfo.condition.icon"
						:alt="store.weatherInfo.condition.text"
						width="64"
						height="64" />
				</div>
			</div>
			<!-- Forecast Day -->
			<div class="p-2 mb-4 rounded-md bg-[#202b3b]">
				<h3 class="uppercase text-[10px] text-gray-500 font-semibold">
					Today's Forecast
				</h3>
				<div
					class="divide-y md:divide-x md:divide-y-0 flex flex-col md:flex-row md:justify-around divide-gray-700">
					<div
						v-for="(hour, _idx) in store.forecastToDayHoursShort"
						:key="_idx"
						class="flex md:flex-col md:items-stretch justify-between items-center md:px-2">
						<div>
							<p>
								{{ getLocaleHours(hour.time) }}
							</p>
							<h6 class="text-[8px]">
								{{ hour.condition.text }}
								<span class="pl-2 text-[12px]">{{ hour.temp_c }}°</span>
							</h6>
						</div>
						<img
							:src="hour.condition.icon"
							alt="weather icon"
							width="64"
							height="64" />
					</div>
				</div>
			</div>
			<!-- Air conditions -->
			<div class="p-2 mb-4 rounded-md bg-[#202b3b] last:mb-0">
				<h3 class="uppercase text-[10px] text-gray-500 font-semibold">
					Air conditions
				</h3>
				<div>
					
				</div>
			</div>
		</div>
		<div
			class="border border-cyan-500 h-full p-2 col-span-3 md:col-span-1"></div>
	</div>
</template>

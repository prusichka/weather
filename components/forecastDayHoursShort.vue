<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
</script>
<template>
	<div
		v-for="(hour, _idx) in store.forecastToDayHoursShort"
		:key="_idx"
		class="flex md:flex-col md:items-stretch justify-between items-center md:px-2">
		<div>
			<p>
				{{ useLocaleHours(hour.time) }}
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
</template>

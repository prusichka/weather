<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
const { horizontal, week } = defineProps({
	horizontal: {
		type: Boolean,
		required: false,
		default: false,
	},
	week: {
		type: Boolean,
		required: false,
		default: false,
	},
})
</script>
<template>
	<template v-if="week">
		<div
			v-for="(el, _idx) in store.forecastWeek"
			:key="_idx"
			class="py-2 grid grid-cols-4"
			:class="{
				'lg:flex-col lg:items-stretch': horizontal,
			}">
			<p class="flex justify-start items-center col-span-1">
				{{ useLocaleDay(el.date) }}
			</p>
			<div class="flex flex-col items-center col-span-2">
				<img
					:src="el.day.condition.icon"
					alt="weather icon"
					width="64"
					height="64" />
				<h6 class="text-[12px] w-full text-center">
					{{ el.day.condition.text }}
				</h6>
			</div>
			<span class="text-[12px] flex justify-end items-center col-span-1">
				{{ el.day.maxtemp_c }}° / {{ el.day.mintemp_c }}°
			</span>
		</div>
	</template>
	<template v-else>
		<div
			v-for="(el, _idx) in store.forecastToDayHoursShort"
			:key="_idx"
			class="flex justify-between items-center lg:px-2"
			:class="{
				'lg:flex-col lg:items-stretch': horizontal,
			}">
			<div>
				<p>
					{{ useLocaleHours(el.time) }}
				</p>
				<h6 class="text-[8px] text-center">
					{{ el.condition.text }}
					<span class="pl-2 text-[12px]">{{ el.temp_c }}°</span>
				</h6>
			</div>
			<img
				:src="el.condition.icon"
				alt="weather icon"
				width="64"
				height="64" />
		</div>
	</template>
</template>

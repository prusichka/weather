<script setup lang="ts">
import { ResponseLocationsFound } from '~/interfaces'
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
defineProps<{
	items: ResponseLocationsFound[]
	loading: boolean
}>()
const emits = defineEmits(['clear-search-value'])
async function chooseLocation(locationUrl: string) {
	await store.getForecastLocationWeather(locationUrl)
	store.clearFoundLocationsData()
	emits('clear-search-value')
}
</script>
<template>
	<div
		id="autocomplete"
		class="w-full absolute z-50 mt-1 h-auto transition-all max-h-[200px] text-sm rounded-lg overflow-x-hidden overflow-y-auto bg-slate-800 text-white">
		<CustomLoader v-if="loading" />
		<div v-else>
			<template v-if="items.length">
				<div
					class="w-full p-3 group cursor-pointer divide-y"
					v-for="el in items"
					:key="el.id"
					@click="chooseLocation(el.url)">
					<div
						class="w-full flex justify-between border-b last:border-b-0 border-cyan-950 group-hover:border-cyan-700 transition-colors">
						<h2
							class="text-[18px] text-blue-200 group-hover:text-slate-50 transition-colors">
							{{ el.name }}
						</h2>
						<div class="flex flex-col">
							<h4
								class="text-[14px] text-right text-blue-300 group-hover:text-blue-100 transition-colors">
								{{ el.region }}
							</h4>
							<h3
								class="text-[10px] text-right text-blue-500 group-hover:text-blue-300 transition-colors">
								{{ el.country }}
							</h3>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style></style>

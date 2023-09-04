<script setup lang="ts">
import { ResponseLocation } from '~/interfaces'
defineProps<{
	items: ResponseLocation[]
	loading: boolean
}>()
</script>
<template>
	<div
		id="autocomplete"
		class="w-full mt-1 h-auto transition-all max-h-[200px] text-sm rounded-lg overflow-x-hidden overflow-y-auto bg-slate-800 bg-opacity-80 text-white">
		<CustomLoader v-if="loading" />
		<div v-else>
			<template v-if="items.length">
				<div
					class="w-full p-3 group cursor-pointer divide-y"
					v-for="el in items"
					:key="el.id">
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

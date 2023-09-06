<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
</script>
<template>
	<div class="w-full grid grid-cols-2 grid-rows-2 gap-3">
		<div
			class="flex flex-col w-full items-center"
			v-for="condition in store.airConditions"
			:key="condition.id">
			<Icon
				size="64px"
				:name="condition.icon" />
			<h5 class="text-gray-400 pl-2 text-[14px]">
				{{ condition.title }} <span>{{ condition.value }}</span>
			</h5>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from '~/stores/search'

let timerId: any

const searchLoading = ref(false)
const store = useSearchStore()
const searchValue: Ref<string> = ref('')

async function search() {
	searchLoading.value = true
	await store.searchLocation(searchValue.value)
	setTimeout(() => (searchLoading.value = false), 1000)
}

watch(searchValue, async () => {
	if (timerId) clearTimeout(timerId)
	if (searchValue.value.length > 2) {
		timerId = setTimeout(async () => {
			await search()
		}, 700)
	} else store.clearFoundLocationsData()
})
</script>

<template>
	<div class="w-full max-w-[500px] mx-auto">
		<SearchInput v-model="searchValue" />
		<div class="relative">
			<AutoComplete
				:items="store.foundLocations"
				:loading="searchLoading"
				@clear-search-value="searchValue = ''" />
		</div>
	</div>
</template>

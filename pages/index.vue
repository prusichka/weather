<script setup lang="ts">
import { ResponseLocation } from '~/interfaces'
import { useSearchStore } from '~/stores/search'

let timerId: any

const searchLoading = ref(false)
const store = useSearchStore()
const searchValue: Ref<string> = ref('')
const foundLocations: Ref<ResponseLocation[]> = ref([])

async function search() {
	searchLoading.value = true
	foundLocations.value = await store.searchLocation(searchValue.value)
	setTimeout(() => (searchLoading.value = false), 1000)
}

watch(searchValue, async () => {
	if (timerId) clearTimeout(timerId)
	if (searchValue.value.length > 2) {
		timerId = setTimeout(async () => {
			await search()
		}, 700)
	} else foundLocations.value = [] as ResponseLocation[]
})
</script>
<template>
	<Title>Weather</Title>
	<div class="w-full max-w-[500px] mx-auto">
		<SearchInput v-model="searchValue" />
		<AutoComplete
			:items="foundLocations"
			:loading="searchLoading" />
	</div>
</template>

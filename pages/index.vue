<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()
</script>
<template>
	<Title>Weather</Title>
	<div class="w-full h-full bg-transparent">
		<div v-if="Object.keys(store.currentLocationWeather)" class="text-white">
			{{ store.currentLocationWeather }}
		</div>
	</div>
</template>

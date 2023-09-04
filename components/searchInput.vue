<script setup lang="ts">
import { useSearchStore } from '~/stores/search'
const store = useSearchStore()

const emit = defineEmits(['update:modelValue'])
const { modelValue } = defineProps({
	modelValue: {
		type: String,
		default: '',
	},
})
const updateInputValue = (e: Event) => {
	const target: HTMLInputElement = e.target as HTMLInputElement
	if (target) {
		emit('update:modelValue', target.value)
	}
}
const closeModal = () => {
	setTimeout(() => {
		store.clearFoundLocationsData()
		emit('update:modelValue', '')
	}, 200)
}
/**
 * TODO: Rework the logic of the autocomplete Popup
 */
</script>

<template>
	<div class="relative">
		<SearchSvg />
		<input
			type="text"
			:value="modelValue"
			@input="(e) => updateInputValue(e)"
			@blur="closeModal"
			autocomplete="off"
			id="search"
			class="bg-gray-50 border pl-10 border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="London"
			required />
	</div>
</template>

<script setup lang="ts"></script>

<template>
	<div
		class="w-full h-full fixed bg-black bg-gradient-to-t from-gray-900 p-3 overflow-y-auto">
		<FoundLocation />
		<div class="w-full h-auto max-w-[1440px] mx-auto py-5">
			<slot />
		</div>
	</div>
</template>

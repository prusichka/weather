<script setup lang="ts"></script>

<template>
	<div class="w-full h-full fixed bg-black bg-gradient-to-t from-gray-900 p-3">
		<div class="w-full h-[84px] mx-auto max-w-[500px] mb-4">
			<h1
				class="text-white select-none w-full flex justify-center text-[56px]"
				style="font-family: 'Permanent Marker', sans-serif">
				Weather
			</h1>
		</div>
		<FoundLocation />
		<div class="w-full h-full max-w-[650px] mx-auto py-10">
			<slot />
		</div>
	</div>
</template>

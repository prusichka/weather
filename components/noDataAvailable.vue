<script setup lang="ts">
useHead({
	link: [
		{
			rel: 'preload',
			as: 'image',
			href: 'https://www.transparentpng.com/thumb/weather/png-photo-weather-hd-9.png',
		},
	],
})
</script>
<template>
	<div class="w-full h-auto flex flex-col justify-center items-center">
		<h3 class="text-[32px] text-center mb-10">
			Find the city you are interested in...
		</h3>
		<NuxtImg
			src="https://www.transparentpng.com/thumb/weather/png-photo-weather-hd-9.png"
			width="400"
			height="400"
			alt="default weather image"
			loading="lazy" />
	</div>
</template>

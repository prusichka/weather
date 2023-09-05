<script setup lang="ts">
import defaultImg from '~/public/default.png'
</script>
<template>
	<div class="w-full h-auto flex flex-col justify-center items-center">
		<h3 class="text-[32px] text-center mb-10">
			Find the city you are interested in...
		</h3>
		<img
			class="w-full h-auto"
			:src="defaultImg"
			alt="default weather image"
			width="570"
			height="415" />
	</div>
</template>

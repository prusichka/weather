<script setup lang="ts"></script>

<template>
	<div class="w-full h-full fixed bg-black bg-gradient-to-t from-gray-900 p-3">
		<div class="w-full h-[30px] mx-auto max-w-[600px] mb-4">
			<h1 class="text-white w-full flex justify-center text-xl">Weather</h1>
		</div>
		<div class="w-full h-full mx-auto">
			<slot />
		</div>
	</div>
</template>

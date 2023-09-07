<script setup lang="ts">
onMounted(() => {
	usePermissionGeo()
})
</script>

<template>
	<VitePwaManifest />
	<NuxtLayout>
		<NuxtPage></NuxtPage>
	</NuxtLayout>
</template>
<style>
* {
	font-family: 'Manrope', sans-serif;
}
::-webkit-scrollbar {
	width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #083344;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #0e7490;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #1e1c35;
}
</style>
<!-- /1e1c35 -->

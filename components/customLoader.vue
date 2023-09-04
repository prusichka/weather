<template>
	<div class="p-2 w-full flex justify-center">
    <div class="dots"></div>
  </div>
</template>
<style scoped>
.dots {
	width: 5.8px;
	height: 5.8px;
	background: #7de1ff;
	color: #7de1ff;
	border-radius: 50%;
	box-shadow: 5.8px 0, -11.5px 0;
	animation: dots-h5boszmn 0.5s infinite linear alternate;
}

@keyframes dots-h5boszmn {
	50% {
		box-shadow: 5.8px 0, -5.8px 0;
	}

	100% {
		box-shadow: 11.5px 0, -5.8px 0;
	}
}
</style>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			apiBase: 'https://api.weatherapi.com/v1',
			apiSecret: '2046ad4ffc1e4efe89f84427230409',
		},
	},
	nitro: {
		compressPublicAssets: true,
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@pinia/nuxt',
		'@nuxt/image',
	],
	googleFonts: {
		families: {
			Manrope: true,
			'Permanent Marker': true,
		},
	},
})

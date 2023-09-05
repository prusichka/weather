// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			apiBase: 'https://api.weatherapi.com/v1',
			apiSecret: '2046ad4ffc1e4efe89f84427230409',
		},
	},
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@pinia/nuxt'],
	googleFonts: {
		families: {
			'Carter One': true,
			'Permanent Marker': true,
		},
	},
})

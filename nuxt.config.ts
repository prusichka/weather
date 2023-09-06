// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: true },
	app: {
		head: {
			meta: [
				{ name: 'description', content: 'My amazing weather site.' },
				{ name: 'name', content: 'Weather' },
			],
			htmlAttrs: {
				lang: 'en',
			},
		},
	},
	runtimeConfig: {
		public: {
			apiBase: 'https://api.weatherapi.com/v1',
			apiSecret: '2046ad4ffc1e4efe89f84427230409',
		},
	},
	nitro: {
		compressPublicAssets: true,
		preset: 'vercel-edge',
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@pinia/nuxt',
		'@nuxt/image',
		'@pinia-plugin-persistedstate/nuxt',
	],
	googleFonts: {
		families: {
			Manrope: true,
			'Permanent Marker': true,
		},
	},
})

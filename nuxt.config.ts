// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: true },
	app: {
		head: {
			meta: [
				{ name: 'description', content: 'My amazing weather site.' },
				{ name: 'name', content: 'Weather' },
				{ name: 'theme-color', content: '#000000' },
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
		'nuxt-icon',
		'@vite-pwa/nuxt',
	],
	pwa: {
		manifest: {
			name: 'Weather',
			short_name: 'Weather',
			description: 'This is a Weather site',
			theme_color: '#000000',
			icons: [
				{
					src: 'android-launchericon-192-192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: 'android-launchericon-512-512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: 'maskable_icon.png',
					purpose: 'maskable',
					sizes: '196x196',
					type: 'image/png',
				},
			],
		},
		devOptions: {
			enabled: true,
			type: 'module',
		},
	},
	googleFonts: {
		families: {
			Manrope: true,
			'Permanent Marker': true,
		},
	},
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'shadcn-nuxt',
		'nuxt-icon',
		'@pinia/nuxt',
		[
			'@vee-validate/nuxt',
			{
				autoImports: true,
			},
		],
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Lato: { wght: [300, 400, 700], ital: [300] },
				},
			},
		],
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: 'Ui',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui',
	},
	pinia: {
		storesDirs: ['./stores/**', './custom-folder/stores/**'],
	},
})

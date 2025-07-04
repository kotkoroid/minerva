import { defineWorkersProject } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersProject({
	test: {
		exclude: ['**/tsbuild'],
		poolOptions: {
			workers: {
				miniflare: {
					bindings: {
						ACCESS_TOKEN_SECRET: 'c46ffe6e-8892-4439-abc4-fa526d58c753',
						ACCESS_TOKEN_ISSUER: 'https://checkpoint.falkara.com',
						PRODUCT_AUDIENCE_MINERVA: 'https://api.minerva.falkara.com',
					},
				},
				wrangler: { configPath: './wrangler.jsonc' },
			},
		},
	},
});

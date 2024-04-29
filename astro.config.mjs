import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian';

// https://astro.build/config
export default defineConfig({
	site: 'https://madeleaan.github.io',
	redirects: {
		'/': '/notes/informatika/hotovo/2d-počítačová-grafika/',
		'/notes': '/notes/informatika/hotovo/2d-počítačová-grafika/'
	},
	integrations: [
		starlight({
			title: 'Poznámky',
			tableOfContents: {
				minHeadingLevel: 1
			},
			sidebar: [
				obsidianSidebarGroup,
			],
			plugins: [
				starlightObsidian ({
					vault: './docs'
				}),
			],
		}),
	],
});

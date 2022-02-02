/** @type {import('@sveltejs/kit').Config} */

import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: node()
	}
};

export default config;

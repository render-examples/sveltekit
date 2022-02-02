/** @type {import('@sveltejs/kit').Config} */

import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: node(),
		
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;

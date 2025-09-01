import { fail } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	if (!params.address) {
		return fail(404, { message: 'No address provided, error loading account!!' });
	}

	return { address: params.address };
};

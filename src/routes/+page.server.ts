import { json } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	joinWaitlist: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (!email || typeof email !== 'string') {
			return json({ success: false, message: 'Email is required' });
		}

		return json({ success: true, message: 'test' });
	}
} satisfies Actions;

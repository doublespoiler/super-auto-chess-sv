import { json } from '@sveltejs/kit';

export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;

	// this is the same as the imported sveltekit json function
    // return new Response(number, {
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	}
	// });
	return json(number);
}
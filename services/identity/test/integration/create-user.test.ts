import { SELF } from 'cloudflare:test';
import { describe, expect, it } from 'vitest';

describe('createUser', () => {
	describe('should return and create a user when', () => {
		it('the input is valid', async () => {
			const username = 'ClaudiaPina';
			const email = 'claudiapina@falkara.com';
			const password = '9hDBwx41RXY@vC8dppV$kCkJ';

			const result = await SELF.createUser({
				username,
				email,
				password,
			});

			expect(result).toEqual({
				id: result?.id,
				createdAt: result?.createdAt,
				modifiedAt: result?.modifiedAt,
				username,
				email,
				password: result?.password,
				salt: result?.salt,
				status: 'UNVERIFIED',
			});
		});
	});
});

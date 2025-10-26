import STRING_CONSTANT from './STRING_CONSTANT';

describe('STRING_CONSTANT', () => {
	it('should be a string', () => {
		expect(STRING_CONSTANT).toBeInstanceOf(String);
		// expect(STRING_CONSTANT).toEqual(expect.any(String));
		// expect(STRING_CONSTANT).toEqual(expect.stringContaining('...'));
	});
});

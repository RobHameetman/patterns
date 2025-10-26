import NUMBER_CONSTANT from './NUMBER_CONSTANT';

describe('NUMBER_CONSTANT', () => {
	it('should be a number', () => {
		expect(NUMBER_CONSTANT).toBeInstanceOf(Number);
		// expect(NUMBER_CONSTANT).toBe(1);
	});
});

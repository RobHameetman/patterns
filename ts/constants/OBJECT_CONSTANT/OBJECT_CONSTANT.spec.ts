import OBJECT_CONSTANT from './OBJECT_CONSTANT';

describe('OBJECT_CONSTANT', () => {
	it('should be an object', () => {
		expect(OBJECT_CONSTANT).toEqual(expect.any(Object));
	});

	it('should have a key "key" with value "value"', () => {
		expect(OBJECT_CONSTANT).toHaveProperty('key', 'value');
	});
});

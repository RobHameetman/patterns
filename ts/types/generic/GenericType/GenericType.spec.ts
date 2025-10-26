import { isString } from '@/...';
import { type GenericType, isGenericType } from './GenericType';
import { fakeGenericType } from './__test__';

/**
 * @TODO - Replace with actual type/guard.
 */
type T = string;

const isT = isString;

/* Contract Test */
describe('GenericType', () => {
	let value: unknown = null;

	beforeAll(() => {
		value = fakeGenericType();
	});

	afterAll(() => {
		value = null;
	});

	it('should be an object', () => {
		expect(value).toBe(expect.any(Object));
	});

	it('should have the required data', () => {
		expect(value).toHaveProperty('required', expect.any(String));
	});
});

/* Guard Test */
describe('isGenericType()', () => {
  it('should return true given a valid GenericType', () => {
    expect(isGenericType<T>(fakeGenericType<T>(), isT)).toBe(true);
  });

  it('should return false given an invalid GenericType', () => {
    expect(isGenericType<T>(fakeGenericType<T>({ required: null }), isT)).toBe(false);
  });
});

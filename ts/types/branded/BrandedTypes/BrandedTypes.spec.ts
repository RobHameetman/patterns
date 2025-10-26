import { type BrandedTypes, areBrandedTypes } from './BrandedTypes';
import { fakeBrandedTypes } from './__test__';
import { isBrandedType } from '../BrandedTypes';

/**
 * @NOTE: Type guards should never invoke methods to test behavior; we can do
 * that here in the contract test using a fake instead.
 */

/* Contract Test */
describe('BrandedTypes', () => {
	let value: ReadonlyArray<unknown> | null = null;

	beforeAll(() => {
		value = fakeBrandedTypes();
	});

	afterAll(() => {
		value = null;
	});

	it('should be an array', () => {
		expect(value).toBeInstanceOf(Array);
	});

	it('should only contain BrandedType values', () => {
		expect(value?.every(isBrandedType)).toBe(true);
	});
});

/* Guard Test */
describe('areBrandedTypes()', () => {
	it('should return true given valid BrandedTypes', () => {
		expect(areBrandedTypes(fakeBrandedTypes())).toBe(true);
	});

	it('should return false given invalid BrandedTypes', () => {
		expect(areBrandedTypes(fakeBrandedTypes({ invalid: true }))).toBe(false);
	});
});

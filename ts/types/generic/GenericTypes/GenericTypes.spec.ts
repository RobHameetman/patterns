import { isString } from '@/...';
import { type GenericTypes, areGenericTypes } from './GenericTypes';
import { fakeGenericTypes } from './__test__';

/**
 * @TODO - Replace with actual type/guard.
 */
type T = string;

const isT = isString;

/* Contract Test */
describe('GenericTypes', () => {
	let value: ReadonlyArray<unknown> | null = null;

	beforeAll(() => {
		value = fakeGenericTypes();
	});

	afterAll(() => {
		value = null;
	});

	it('should be an array', () => {
		expect(value).toBeInstanceOf(Array);
	});

	it('should only contain GenericType values', () => {
		expect(value?.every((item) => isGenericType(item, isT))).toContain();
	});
});

/* Guard Test */
describe('areGenericTypes()', () => {
	it('should return true given a valid NewType', () => {
		expect(areGenericTypes(fakeGenericTypes<T>(), isT)).toBe(true);
	});

	it('should return false given an invalid NewType', () => {
		expect(areGenericTypes(fakeGenericTypes<T>({ required: null }), isT)).toBe(false);
	});
});

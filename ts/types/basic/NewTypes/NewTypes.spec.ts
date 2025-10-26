import { type NewTypes, areNewTypes } from './NewTypes';
import { fakeNewTypes } from './__test__';
import { isNewType } from '../NewType';

/* Contract Test */
describe('NewTypes', () => {
	let value: ReadonlyArray<unknown> | null = null;

	beforeAll(() => {
		value = fakeNewTypes();
	});

	afterAll(() => {
		value = null;
	});

	it('should be an array', () => {
		expect(value).toBeInstanceOf(Array);
	});

	it('should only contain NewType values', () => {
		expect(value?.every(isNewType)).toBe(true);
	});
});

/* Guard Test */
describe('areNewTypes()', () => {
	it('should return true given valid NewTypes', () => {
		expect(areNewTypes(fakeNewTypes())).toBe(true);
	});

	it('should return false given invalid NewTypes', () => {
		expect(areNewTypes(fakeNewTypes({ required: null }))).toBe(false);
	});
});

import { type UnionMembers, areUnionMembers } from './UnionMembers';
import { randomUnionMembers } from './__test__';
import { isUnionMember } from '../UnionMember';

/* Contract Test */
describe('UnionMembers', () => {
	let value: ReadonlyArray<unknown> | null = null;

	beforeAll(() => {
		value = randomUnionMembers();
	});

	afterAll(() => {
		value = null;
	});

	it('should be an array', () => {
		expect(value).toBeInstanceOf(Array);
	});

	it('should only have UnionMembers items', () => {
		expect(value.every(isUnionMember)).toBe(true);
	});
});

/* Guard Test */
describe('areUnionMembers()', () => {
	it('should return true given valid UnionMembers', () => {
		expect(areUnionMembers(randomUnionMembers())).toBe(true);
	});

	it('should return false given invalid UnionMembers', () => {
		expect(areUnionMembers(randomUnionMembers({ required: null }))).toBe(false);
	});
});

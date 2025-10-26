import { UNION_MEMBERS, isUnionMember } from './UnionMembers';

describe('UNION_MEMBERS', () => {
	it('should be an array', () => {
		expect(UNION_MEMBERS).toBeInstanceOf(Array);
	});

	it('should contain every union member', () => {
		expect(UNION_MEMBERS).toContain('this');
		expect(UNION_MEMBERS).toContain('that');
	});
});

describe('isUnionMember()', () => {
	it('should return true given "this"', () => {
		expect(isUnionMember('this')).toBe(true);
	});

	it('should return true given "that"', () => {
		expect(isUnionMember('that')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isUnionMember('')).toBe(false);
	});
});

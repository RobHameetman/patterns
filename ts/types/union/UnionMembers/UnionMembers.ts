import { type UnionMember, isUnionMember } from '../../UnionMember';

/**
 * @TODO
 */
export type UnionMembers = ReadonlyArray<UnionMember>;

/**
 * Checks that an `unknown` value are an array of {@link UnionMembers}.
 *
 * Requirements:
 *   - `value` must be an array of {@link UnionMember}s.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` are or are not an array of {@link UnionMembers}.
 */
export const areUnionMembers = (
	value: unknown,
): value is UnionMembers =>
	/**
	 * value
	 */
	value instanceof Array &&
	value.every(isUnionMember);

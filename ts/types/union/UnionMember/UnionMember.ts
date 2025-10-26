import { isString } from '@/...';

/**
 * @TODO
 */
export type UnionMember =
	/**
	 * @TODO
	 */
	| 'this'

	/**
	 * @TODO
	 */
	| 'that';

/**
 * @TODO
 */
export const UNION_MEMBERS = Object.freeze([
	'this',
	'that'
]);

/**
 * Checks that an `unknown` value is a {@link UnionMember}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link UnionMembers}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link UnionMember}.
 */
export const isUnionMember = (value: unknown): value is UnionMember =>
	/**
	 * value
	 */
	isString(value) && UNION_MEMBERS.includes(value);

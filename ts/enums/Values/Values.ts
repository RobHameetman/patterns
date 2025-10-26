import { isString } from '@/...';

/**
 * @TODO
 */
export enum Values {
	/**
	 * @TODO
	 */
	This,

	/**
	 * @TODO
	 */
	That,
}

/**
 * @TODO
 */
export type Value = keyof typeof Values;

/**
 * @TODO
 */
export const VALUES = Object.freeze(
	Object.keys(Values).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link Value}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link Values}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Value}.
 */
export const isValue = (value: unknown): value is Value =>
	/**
	 * value
	 */
	isString(value) && VALUES.includes(value);

export default Value;

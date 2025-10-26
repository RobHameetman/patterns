import { isString } from '@/...';

/**
 * @TODO
 */
export enum StringValues {
	/**
	 * @TODO
	 */
	This = 'this',

	/**
	 * @TODO
	 */
	That = 'that',
}

/**
 * @TODO
 */
// export type StringValue = keyof typeof StringValues;
export type StringValue = `${StringValues}`;

/**
 * @TODO
 */
export const STRING_VALUES = Object.freeze(
	// Object.keys(StringValues).filter(isString),
	Object.values(StringValues).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link StringValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link Values}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link StringValue}.
 */
export const isStringValue = (value: unknown): value is StringValue =>
	/**
	 * value
	 */
	isString(value) && STRING_VALUES.includes(value);

export default StringValues;

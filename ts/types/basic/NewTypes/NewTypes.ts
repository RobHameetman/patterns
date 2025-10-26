import { type NewType, isNewType } from '@/...';

/**
 * @TODO
 */
export type NewTypes = ReadonlyArray<NewType>;

/**
 * Checks that an `unknown` value are an array of {@link NewTypes}.
 *
 * Requirements:
 *   - `value` must be an array of {@link NewType}s.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` are or are not an array of {@link NewTypes}.
 */
export const areNewTypes = (
	value: unknown,
): value is NewTypes =>
	/**
	 * value
	 */
	value instanceof Array &&
	value.every(isNewType);

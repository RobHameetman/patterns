import { type GenericType, isGenericType } from '../../GenericType';

/**
 * @TODO
 *
 * @typeParam `T` - @TODO
 */
export type GenericTypes<T> = ReadonlyArray<GenericType<T>>;

/**
 * Checks that an `unknown` value are an array of {@link GenericTypes}.
 *
 * Requirements:
 *   - `value` must be an array of {@link GenericType}s.
 *
 * @typeParam `T` - @TODO
 *
 * @param value - An `unknown` value.
 * @param isT - [Optional] A type guard for type `T`. Defaults to a no-op guard.
 *
 * @returns The determination that `value` are or are not an array of {@link GenericTypes}.
 */
export const areGenericTypes = <T>(
	value: unknown,
  isT = (_value: unknown): _value is T => true
): value is GenericType<T> =>
	/**
	 * value
	 */
	value instanceof Array &&
	value.every((item) => isGenericType<T>(item, isT));

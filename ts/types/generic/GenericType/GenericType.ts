import isObject from '@/...';

/**
 * @TODO
 *
 * @typeParam `T` - @TODO
 */
export interface GenericType<T> {
  /**
   * [Optional] @TODO
   */
  readonly optional?: T | null;

  /**
   * @TODO
   */
  readonly required: T;
}

/**
 * Checks that an `unknown` value is a {@link GenericType}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.optional` is optional and must be a valid `T` if provided.
 *   - `value.required` is required and must be a valid `T`.
 *   - `value.method()` is required and must be a function.
 *
 * @typeParam `T` - @TODO
 *
 * @param value - An `unknown` value.
 * @param isT - [Optional] A type guard for type `T`. Defaults to a no-op guard.
 *
 * @returns The determination that `value` is or is not a {@link GenericType}.
 */
export const isGenericType = <T>(
  value: unknown,
  isT = (_value: unknown): _value is T => true
): value is GenericType<T> =>
    /**
     * value
     */
    isObject(value) &&
    /**
     * value.optional
     */
    ('optional' in value ? isT(value.optional) || value.optional === null : true) &&
    /**
     * value.required
     */
    'required' in value &&
    isT(value.required);

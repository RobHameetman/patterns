import isObject from '@/...';
import type { Branded } from '@/...';

/**
 * @TODO
 */
export interface BrandedType extends Branded<'BrandedType'> {
  /**
   * [Optional] @TODO
   */
  readonly optional?: string;

  /**
   * @TODO
   */
  readonly required: string;
}

/**
 * Checks that an `unknown` value is a {@link BrandedType}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.__type` is required for tests and must be the string `'BrandedType'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BrandedType}.
 */
export const isBrandedType = (value: unknown): value is BrandedType =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.__type
	 */
	'__type' in value &&
	value.__type === 'BrandedType';

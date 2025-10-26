import { dependency as _dependency } from 'dependency';

/**
 * Functional dependencies used in the {@link useHook()} hook. This object is
 * provided in tests for mocking and spying.
 */
export interface UseHookDependencies {
	/**
	 * @TODO
	 */
	readonly dependency?: typeof _dependency;
}

/**
 * Destructured arguments provided to the {@link useHook()} hook.
 */
export interface UseHookInput {
	/**
	 * [Optional] @TODO
	 */
	readonly optional?: string;

	/**
	 * @TODO
	 */
	readonly required: string;

	/**
	 * @TODO
	 *
	 * @defaultValue - A no-op function.
	 */
	readonly method: () => string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseHookDependencies;
}

/**
 * @TODO
 *
 * @param input - A {@link UseHookInput} object used for destructuring.
 */
export const useHook = ({ _dependencies = {} }: UseNewHookInput) => {
	const { dependency = _dependency } = _dependencies;

	/**
	 * @TODO
	 */
	dependency();
};

export default useHook;

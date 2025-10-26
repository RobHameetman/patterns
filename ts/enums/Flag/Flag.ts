import { isNumber } from '@/...';

/**
 * @TODO
 */
export enum Flag {
	/**
	 * @TODO
	 */
	None = 0,

	/**
	 * @TODO
	 */
	First = 0b0000000000000000000000000000001,

	/**
	 * @TODO
	 */
	Second = 0b0000000000000000000000000000010,
}

/**
 * An array of all {@link Flag} values.
 */
export const FLAGS = Object.freeze(
	Object.values(Flag).filter(isNumber),
);

/**
 * Checks that an `unknown` value is a {@link Flag}.
 *
 * Requirements:
 *   - `value` must be a number and must be included as a value of {@link Flag}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Flag}.
 */
export const isFlag = (value: unknown): value is Flag =>
	/**
	 * value
	 */
	isNumber(value) && FLAGS.includes(value);

/**
 * Checks if a specific flag is set within a set of flags.
 *
 * @param flags - The flags to check in.
 * @param flag - The flag to check for.
 *
 * @returns A boolean value which is `true` if the flag is
 * in the set.
 */
export const hasFlag = (flags: Flag, flag: Flag) =>
	(flags & flag) === flag;

/**
 * Checks if any of the specified flags are set in a set of flags.
 *
 * @param flags - The flags to check in.
 * @param checkFlags - One or more flags to check for.
 *
 * @returns A boolean value which is `true` if any of the provided
 * flags are in the set.
 */
export const hasAnyFlag = (flags: Flag, ...checkFlags: ReadonlyArray<Flag>) =>
	checkFlags.some((flag) => (flags & flag) !== 0);

/**
 * Checks if every of the specified flags are set in a set of flags.
 *
 * @param flags - The flags to check in.
 * @param checkFlags - One or more flags to check for.
 *
 * @returns A boolean value which is `true` if all of the provided
 * flags are in the set.
 */
export const hasEveryFlag = (flags: Flag, ...checkFlags: ReadonlyArray<Flag>) =>
	checkFlags.every((flag) => (flags & flag) === flag);

/**
 * Adds one or more flags to a set of flags.
 *
 * @param flags - The flags to add to.
 * @param newFlags - One or more flags to add.
 *
 * @returns The updated flags value with new flags included.
 */
export const addFlag = (flags: Flag, ...newFlags: ReadonlyArray<Flag>) =>
	newFlags.reduce((result, flag) => result | flag, flags);

/**
 * Removes one or more flags from a set of flags.
 *
 * @param flags - The flags to remove from.
 * @param removeFlags - One or more flags to remove.
 *
 * @returns The updated flags value with provided flags removed.
 */
export const removeFlag = (flags: Flag, ...removeFlags: ReadonlyArray<Flag>) =>
	removeFlags.reduce((result, flag) => result & ~flag, flags);

/**
 * Toggles one or more flags in a set of flags.
 *
 * @param flags - The flags to remove from.
 * @param toggleFlags - One or more flags to toggle.
 *
 * @returns The updated flags value with provided flags toggled.
 */
export const toggleFlag = (flags: Flag, ...toggleFlags: ReadonlyArray<Flag>) =>
	toggleFlags.reduce((result, flag) => result ^ flag, flags);


/**
 * Create a new set of flags.
 *
 * @param initialFlag - The initial flags to use.
 * @defaultValue `0`
 *
 * @returns An object with the above flag methods.
 */
export const flags = (initialFlags = Flag.None) => {
	let flags = initialFlags;

	const add = (...newFlags: ReadonlyArray<Flag>) => {
		flags = addFlag(flags, ...newFlags);
	};

	const remove = (...removeFlags: ReadonlyArray<Flag>) => {
		flags = removeFlag(flags, ...removeFlags);
	};

	const toggle = (...toggleFlags: ReadonlyArray<Flag>) => {
		flags = toggleFlag(flags, ...toggleFlags);
	};

	const has = (flag: Flag) =>
		hasFlag(flags, flag);

	const any = (...checkFlags: ReadonlyArray<Flag>) =>
		hasAnyFlag(flags, ...checkFlags);

	const every = (...checkFlags: ReadonlyArray<Flag>) =>
		hasEveryFlag(flags, ...checkFlags);

	return {
		get,
		add,
		remove,
		toggle,
		has,
		any,
		every
	} as const;
};

export default Flag;

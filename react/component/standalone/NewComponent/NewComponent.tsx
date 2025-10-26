import type { $FC, ReactElement } from 'react';
import cssClasses from '@/...';
import styles from './NewComponent.module.css';

/**
 * Prop types for {@link NewComponent}.
 */
export interface NewComponentProps {
	/**
	 * [Optional] Semantic "as" prop. Override the root node.
	 * @defaultValue - `'aside'`
	 */
	readonly as?: string | ReactElement;

	/**
	 * [Optional] The class name(s) to apply to the component.
	 * @defaultValue - `''`
	 */
	readonly className?: string;


	/**
	 * [Optional] Description of the prop here.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const NewComponent: $FC<NewComponentProps> = ({
	as: _as = 'div',
	className = '',
	children,
	prop = false,
	...props
}) => {
	const css = cssClasses(styles.newComponent, className);

	return (
		<as className={css} {...props}>
			{children}
		</as>
	);
};

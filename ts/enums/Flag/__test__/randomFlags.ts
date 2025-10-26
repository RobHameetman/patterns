import { faker } from '@faker-js/faker';
import Flag, { FLAGS } from '../Flag';

export const randomFlags = () =>
	faker.helpers.arrayElements(FLAGS.filter((flag) => flag !== Flag.None)).reduce(
		(flags, flag) => flags | flag,
		Flag.None
	);

export default randomFlags;

import { faker } from '@faker-js/faker';
import Flag, { FLAGS } from '../Flag';

export const randomFlag = () =>
	faker.helpers.arrayElement(FLAGS.filter((flag) => flag !== Flag.None));

export default randomFlag;

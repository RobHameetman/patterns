import { faker } from '@faker-js/faker';
import fakeGenericType from '../../GenericType/__test__/fakeGenericType';

export const fakeGenericTypes = ({
	invalid = false,
	...overrides
}: Record<string, unknown> = {}) =>
	Array.from(
		{ length: faker.number.int({ min: 1, max: 5 }) },
		() => fakeGenericType({ ...overrides }),
	);

export default fakeGenericTypes;

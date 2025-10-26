import { faker } from '@faker-js/faker';
import fakeNewType from '../../NewType/__test__/fakeNewType';

export const fakeNewTypes = ({
	invalid = false,
	...overrides
}: Record<string, unknown> = {}) =>
	Array.from(
		{ length: faker.number.int({ min: 1, max: 5 }) },
		() => fakeNewType({ ...overrides }),
	);

export default fakeNewTypes;

import { faker } from '@faker-js/faker';
import type { NewContext } from '../NewContext';

export const fakeNewContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	newState: faker.datatype.boolean(),
	newMethod: jest.fn(),
	...overrideProps,
} as NewContext);

export default fakeNewContext;

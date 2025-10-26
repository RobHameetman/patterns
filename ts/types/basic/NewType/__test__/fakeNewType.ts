import { faker } from '@faker-js/faker';
import type { NewType } from '../NewType';

export const fakeNewType = ({
	...overrides
}: Record<string, unknown> = {}) => {
  const newType = {
    required: faker.datatype.string(),
    method: jest.fn(() => faker.datatype.string()),
  } as Record<string, unknown>;

  faker.helpers.maybe(() => {
    newType.optional = faker.datatype.string();
  });

  return {
    ...newType,
    ...overrides,
  } as NewType;
};

export default fakeNewType;

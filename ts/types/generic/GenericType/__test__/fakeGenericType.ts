import { faker } from '@faker-js/faker';
import type { GenericType } from '../GenericType';

export const fakeGenericType = <T>({
	...overrides
}: Record<string, unknown> = {}) => {
  const genericType = {
    required: faker.datatype.string(),
    method: jest.fn(() => faker.datatype.string()),
  } as Record<string, unknown>;

  faker.helpers.maybe(() => {
    genericType.optional = faker.datatype.string();
  });

  return {
    ...genericType,
    ...overrides,
  } as GenericType<T>;
};

export default fakeGenericType;

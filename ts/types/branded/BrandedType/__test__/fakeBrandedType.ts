import { faker } from '@faker-js/faker';
import type { BrandedType } from '../BrandedType';

export const fakeBrandedType = ({
    ...overrides
}: Record<string, unknown> = {}) => {
  const brandedType = {
    required: faker.datatype.string(),
    method: jest.fn(() => faker.datatype.string()),
    __type: 'BrandedType',
  } as Record<string, unknown>;

  faker.helpers.maybe(() => {
    brandedType.optional = faker.datatype.string();
  });

  return {
    ...brandedType,
    ...overrides,
  } as BrandedType;
};

export default fakeBrandedType;

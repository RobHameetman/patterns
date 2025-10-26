import { faker } from '@faker-js/faker';
import fakeBrandedType from '../../BrandedType/__test__/fakeBrandedType';

export const fakeBrandedTypes = ({
	invalid = false,
	...overrides
}: Record<string, unknown> = {}) =>
	Array.from(
		{ length: faker.number.int({ min: 1, max: 5 }) },
		() => invalid
			? fakeBrandedType({ __type: '', ...overrides })
			: fakeBrandedType({ ...overrides }),
	);

export default fakeBrandedTypes;

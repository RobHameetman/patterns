import { type BrandedType, isBrandedType } from './BrandedType';
import { fakeBrandedType } from './__test__';

/* Contract Test */
describe('BrandedType', () => {
	let value: unknown = null;

	beforeAll(() => {
		value = fakeBrandedType();
	});

	afterAll(() => {
		value = null;
	});

  it('should be an object', () => {
    expect(value).toBe(expect.any(Object));
  });

  it('should be branded as a "BrandedType"', () => {
    expect(value).toHaveProperty('__type', 'BrandedType');
  });
});

/* Guard Test */
describe('isBrandedType()', () => {
  it('should return true given a valid BrandedType', () => {
    expect(isBrandedType(fakeBrandedType())).toBe(true);
  });

  it('should return false given an invalid BrandedType', () => {
    expect(isBrandedType(fakeBrandedType({ __type: '' }))).toBe(false);
  });
});

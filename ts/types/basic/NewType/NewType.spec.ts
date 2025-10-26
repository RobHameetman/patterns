import { type NewType, isNewType } from './NewType';
import { fakeNewType } from './__test__';

/**
 * @NOTE: Type guards should never invoke methods to test behavior; we can do
 * that here in the contract test using a fake instead.
 */

/* Contract Test */
describe('NewType', () => {
	let newType: NewType | null = null;

	beforeAll(() => {
		newType = fakeNewType();
	});

	afterAll(() => {
		newType = null;
	});

	it('should be an object', () => {
		expect(newType).toBe(expect.any(Object));
	});

	it('should have the required data', () => {
		expect(newType).toHaveProperty('required', expect.any(String));
	});

	it('should be able to method', () => {
		expect(newType).toHaveProperty('method', expect.any(Function));
		expect(newType?.method()).toBe(expect.any(String));
	});
});

/* Guard Test */
describe('isNewType()', () => {
  it('should return true given a valid NewType', () => {
    expect(isNewType(fakeNewType())).toBe(true);
  });

  it('should return false given an invalid NewType', () => {
    expect(isNewType(fakeNewType({ required: null }))).toBe(false);
  });
});

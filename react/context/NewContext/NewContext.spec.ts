import NewContext, { isNewContext } from './NewContext';
import fakeNewContext from './__test__/fakeNewContext';

describe('isNewContext()', (): void => {
	it('should return true given a valid NewContext', (): void => {
		expect(isNewContext(fakeNewContext())).toBe(true);
	});

	it('should return false given an invalid NewContext', (): void => {
		expect(isNewContext(fakeNewContext({ theme: undefined }))).toBe(false);
	});
});

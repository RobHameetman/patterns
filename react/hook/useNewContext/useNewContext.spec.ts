import { renderHook } from '@testing-library/react';
import { isNewContext } from '@/...';
import useNewContext from './useNewContext';
import MockNewProvider from './__test__/MockNewProvider';

describe('useNewContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(useNewContext, { wrapper: MockNewProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid NewContext', () => {
		expect(result).not.toBeNull();
		expect(isNewContext(result)).toBe(true);
	});
});

import { isStringValue } from './StringValues';

describe('isStringValue()', () => {
  it("should return true given 'this'", () => {
    expect(isStringValue('this')).toBe(true);
  });

  it("should return true given 'that'", () => {
    expect(isStringValue('that')).toBe(true);
  });

  it('should return false given an empty string', () => {
    expect(isStringValue('')).toBe(false);
  });
});

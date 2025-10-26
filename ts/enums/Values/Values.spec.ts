import { isValue } from './Values';

describe('isValue()', () => {
  it("should return true given 'This'", () => {
    expect(isValue('This')).toBe(true);
  });

  it("should return true given 'That'", () => {
    expect(isValue('That')).toBe(true);
  });

  it('should return false given an empty string', () => {
    expect(isValue('')).toBe(false);
  });
});

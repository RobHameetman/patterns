import Flag, { isFlag, hasFlag } from './Flag';
import randomFlag from './__test__/randomFlag';
import randomFlags from './__test__/randomFlags';

describe('isFlag()', () => {
  it("should return true given a valid flag", () => {
    expect(isFlag(randomFlag())).toBe(true);
  });

  it("should return true given 0", () => {
    expect(isFlag(0)).toBe(true);
  });

  it('should return false given multiple flags', () => {
    expect(isFlag(randomFlags())).toBe(false);
  });

  it('should return false given an invalid flag', () => {
    expect(isFlag(-1)).toBe(false);
  });
});

describe('hasFlag()', () => {
	let flagsWithFlag: Flag = Flag.None;
	let flagsWithoutFlag: Flag = Flag.None;
	let flag: Flag = Flag.None;

	beforeEach(() => {
		flag = randomFlag();

		do {
			flagsWithoutFlag = randomFlags();
		} while ((flagsWithoutFlag & flag) === flag)

		flagsWithFlag = flagsWithoutFlag;
		flagsWithFlag |= flag;
	});

	afterEach(() => {
		flagsWithFlag = Flag.None;
		flagsWithoutFlag = Flag.None;
		flag = Flag.None;
	});

  it("should return true given a set of flags and a flag in the set", () => {
    expect(hasFlag(flagsWithFlag, flag)).toBe(true);
  });

  it('should return false given a set of flags and a flag not in the set', () => {
    expect(hasFlag(flagsWithoutFlag, flag)).toBe(false);
  });
});

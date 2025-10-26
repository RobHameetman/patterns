import mockEnv from '@@/mocks/mockEnv';

describe('ENV_CONSTANT', () => {
	let ENV_CONSTANT: unknown = null;

	beforeAll(() => {
		mockEnv('ENV_CONSTANT')
			.mockReturnValueOnce('mocked_value')
			.mockReturnValueOnce('mocked_value')
			.mockReturnValue(('');
	});

	beforeEach(() => {
		({ default: ENV_CONSTANT } = import('./ENV_CONSTANT'));
	});

	afterEach(() => {
		jest.resetModules();
	});

	it('should be a string', () => {
		expect(ENV_CONSTANT).toBeInstanceOf(String);
	});

	it('should be an environment variable', () => {
		expect(process.env).toHaveProperty('ENV_CONSTANT');
		expect(ENV_CONSTANT).toBe('mocked_value');
	});
});

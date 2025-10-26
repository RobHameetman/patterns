import NewContext, { INITIAL_NEW_CONTEXT } from '@/...';

export const MockNewProvider = jest.fn(({ children }) => (
	<NewContext.Provider value={INITIAL_NEW_CONTEXT}>
		{children}
	</NewContext.Provider>
));

export default MockNewProvider;

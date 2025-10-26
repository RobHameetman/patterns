import { useContext } from 'react';
import NewContext from '@/...';

/**
 * Retrieve the current {@link NewContext} from the nearest `NewProvider`. This
 * provider is instantiated in the `AppProvider`.
 */
export const useNewContext = () => useContext(NewContext);

export default useNewContext;

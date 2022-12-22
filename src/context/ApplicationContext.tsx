import Head from 'next/head';
import { createContext, useCallback, useEffect, useMemo, useReducer} from 'react';
import {INITIAL_STATE, UPDATE_SEARCH_TRAINING_PARAMS} from 'utils'
import {ApplicationReducer} from './ApplicationReducer';

interface AppContextInterface {
  state: any;
  updateSearchPrams: (data: any) => void;
}
type Props = {
  children: JSX.Element,
};
export const ApplicationContext = createContext<AppContextInterface>({} as AppContextInterface);
function ApplicationContextWrapper({children}: Props) {
	const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE);
  const updateSearchPrams = useCallback((data: {}) => {
    dispatch({type: UPDATE_SEARCH_TRAINING_PARAMS, data});
  },[]);
	const authContext = useMemo(() => ({
    state,
		updateSearchPrams
	}), [state, updateSearchPrams]);

	return (
		<ApplicationContext.Provider value={{...authContext}}>
			 {children}
		</ApplicationContext.Provider>
	);
}

export default ApplicationContextWrapper;

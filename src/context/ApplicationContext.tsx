import { createContext, useCallback, useMemo, useReducer} from 'react';
import {INITIAL_STATE, UPDATE_COMPANY, UPDATE_LAST_TRAINING, DISPLAY_INSCRIPTION_BUTTON, UPDATE_SEARCH_TRAINING_PARAMS} from 'utils'
import {ApplicationReducer} from './ApplicationReducer';

interface AppContextInterface {
  state: any;
  updateSearchPrams: (data: any) => void;
  updateCompany: (data: any) => void;
  updateLastTraining: (data: any) => void;
  displayInscriptionButton: (data: any) => void;
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
  const updateLastTraining = useCallback((data: {}) => {
    dispatch({type: UPDATE_LAST_TRAINING, data});
  },[]);
  const displayInscriptionButton = useCallback((data: {}) => {
    dispatch({type: DISPLAY_INSCRIPTION_BUTTON, data});
  },[]);
  const updateCompany = useCallback((data: {}) => {
    dispatch({type: UPDATE_COMPANY, data});
  },[]);
	const authContext = useMemo(() => ({
    state,
    updateLastTraining,
    displayInscriptionButton,
		updateSearchPrams,
    updateCompany
	}), [state, updateSearchPrams, updateLastTraining, updateCompany, displayInscriptionButton]);

	return (
		<ApplicationContext.Provider value={{...authContext}}>
			 {children}
		</ApplicationContext.Provider>
	);
}

export default ApplicationContextWrapper;

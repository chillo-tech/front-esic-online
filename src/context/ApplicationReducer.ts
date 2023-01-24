import 
{ 
  INITIAL_STATE, 
  UPDATE_LAST_TRAINING,
  UPDATE_SEARCH_TRAINING_PARAMS,
  UPDATE_COMPANY,
  DISPLAY_INSCRIPTION_BUTTON
} from '../utils';

const ApplicationReducer = (state: any = INITIAL_STATE, action: any) => {
	const {type, data} = action || {};
  switch (type) {
    case UPDATE_SEARCH_TRAINING_PARAMS:
      return {
        ...state,
        trainingsParams: data
      };
    case UPDATE_LAST_TRAINING:
        return {
          ...state,
          lastTraining: data
        };
    case DISPLAY_INSCRIPTION_BUTTON:
        return {
          ...state,
          displayInscriptionButton: data
        };
    case UPDATE_COMPANY:
        return {
          ...state,
          company: data
        };
  }
	return state;
}

export {ApplicationReducer}
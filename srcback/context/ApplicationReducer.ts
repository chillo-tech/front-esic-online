import { INITIAL_STATE, UPDATE_SEARCH_TRAINING_PARAMS} from '../utils';

const ApplicationReducer = (state: any = INITIAL_STATE, action: any) => {
	const {type, data} = action || {};
  switch (type) {
    case UPDATE_SEARCH_TRAINING_PARAMS:
      return {
        ...state,
        trainingsParams: data
      };
  }
	return state;
}

export {ApplicationReducer}
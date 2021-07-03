import {
  SEARCH_ACTIVE
} from '../actions/actionTypes';


const initialState = false;

export const searchReducer = (state = initialState, action) => {
	
  switch (action.type) {
  case SEARCH_ACTIVE:
    return !state;
  default:
    return state;
  }
};

export default searchReducer;
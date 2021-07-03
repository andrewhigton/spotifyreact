import {
  SET_TOKEN
} from '../actions/actionTypes';

const intitialState = {
	token: ''
}


export const tokenReducer = (state = intitialState, action) => {
    
    switch (action.type) {

	  case 'SET_TOKEN':
	    return {
	      ...state,
	      token: action.token
	    };

	  default:
	    return state;
	  }

};

export default tokenReducer;

// import {
//   UPDATE_HEADER_TITLE
// } from '../actions/actionTypes';


const defaultState = {
  title: 'Browse'
};

export const uiReducer = (state = defaultState, action) => {
//so why isn't it coming through here? 
  switch (action.type) {
    case 'UPDATE_HEADER_TITLE':
      return {
        ...state,
        title: action.title
      };

    default:
      return state;
  }
};

export default uiReducer;
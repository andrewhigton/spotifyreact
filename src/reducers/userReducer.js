import {
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../actions/actionTypes';

export const actionTypes = {
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR',
}


const initialState = {
  currentUser: '',
  loading: true,
};

//let actions.user.display_name = 'bob';

export const userReducer = (state = initialState, action) => {
  // console.log(action.user.display_name);
//how to get action to display user here?
  
  switch (action.type) {


  case 'FETCH_USER_SUCCESS':
    return {
      ...state,
      currentUser: action.user.display_name,
      loading: false

    };

  case 'FETCH_USER_ERROR':
    return {
      ...state,

    };

  // case ADD_SONG_TO_LIBRARY_SUCCESS:
  //   return {
  //     ...state,
  //     songAddedToLibrary: true,
  //     songId: action.songId
  //   };

  // case ADD_SONG_TO_LIBRARY_ERROR:
  //   return {
  //     ...state,
  //     songAddedToLibrary: false
  //   };

  default:
    return state;
  }

};

export default userReducer;

import { 
  SEARCH_ACTIVE,
  SEARCH_INACTIVE
} from './actionTypes'

export const setSearchStatus = (dispatch) => {
  //console.log(toggle)
  // if(toggle) {
    return dispatch ({
    type: SEARCH_ACTIVE
  })   
  // } else {
  //   return ({
  //   type: SEARCH_INACTIVE
  // });
  // }
};

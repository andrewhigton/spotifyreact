import {
	UPDATE_HEADER_TITLE
} from '../actions/actionTypes';

// export const fetchCategoriesSuccess = (dispatch, categories) => {
//   return dispatch ({
//     type: 'FETCH_CATEGORIES_SUCCESS',
//     categories
//   });
// };


export const updateHeaderTitle = (title, dispatch) => {
console.log(title)
	  // type: 'UPDATE_HEADER_TITLE',
  	//   title
return ({	
	  type: 'UPDATE_HEADER_TITLE',
	  title
	  });
};



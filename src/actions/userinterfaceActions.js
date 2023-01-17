import {
	UPDATE_HEADER_TITLE
} from '../actions/actionTypes';


export const updateHeaderTitle = (title, dispatch) => {

return ({	
	  type: 'UPDATE_HEADER_TITLE',
	  title
	  });
};



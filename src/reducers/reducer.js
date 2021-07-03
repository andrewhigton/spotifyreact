import { combineReducers } from 'redux';

import browseReducer from './browseReducer'


const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  browse: browseReducer
})

export default rootReducer
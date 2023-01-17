import { combineReducers } from 'redux';

import browseReducer from './browseReducer'


const rootReducer = combineReducers({
  browse: browseReducer
})

export default rootReducer;
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';
import browseReducer from './browseReducer';
import searchReducer from './searchReducer';
import songsReducer from './songsReducer';
import tokenReducer from './tokenReducer';
import albumsReducer from './albumsReducer';
import artistsReducer from './artistsReducer';
import soundReducer from './soundReducer';
import playlistReducer from './playlistReducer';
import userinterfaceReducer from './userinterfaceReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
  browseReducer, 
  userReducer, 
  songsReducer, 
  albumsReducer, 
  tokenReducer, 
  userinterfaceReducer, 
  searchReducer, 
  artistsReducer, 
  playlistReducer,
  soundReducer,
  ]
}

const rootReducer = combineReducers({
	browse: browseReducer,
	user: userReducer,
	token: tokenReducer,
	search: searchReducer,
	songs: songsReducer,
	albums: albumsReducer,
	artists: artistsReducer,
	playlist: playlistReducer,
	sound: soundReducer,
	ui: userinterfaceReducer
});

export default rootReducer;
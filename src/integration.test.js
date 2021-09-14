import { storeFactory } from '../test/testUtils';
import { fetchSongsSuccess } from './actions/songActions';

describe('fetchSongs action dispatcher', () => {

  const songs = {
      "albums": {'dfddfdf':'ddfdf'},
       "artists": {
         "artistIds": "asdasdsad",
       },
       "browse": {},
       "playlist": {},
       "search": false,
       "songs": {
         "fetchSongsPending": true,
         "songDetails": null,
         "songId": 1,
         "songPaused": true,
         "songPlaying": false,
         "timeElapsed": 0,
         "viewType": "songs",
       },
       "sound": {
         "volume": 100,
       },
       "token": {
         "token": "asdasd",
       },
       "ui": {
         "title": "Browse",
       },
       "user": {
         "currentUser": "",
         "loading": true,
       },
    }

    let songsFound = {
      songs: songs,
      fetchSongsError: false,
      fetchSongsPending: false,
      viewType: 'songs'
    };
    
    let store;
    let initialState = {}
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test.skip('returns empty object when fetchSong has no params', () => {
      store.dispatch(fetchSongsSuccess(songsFound));
      const newState = store.getState();
      const expectedState = {
      "albums": {},
       "artists": {
         "artistIds": "",
       },
       "browse": {},
       "playlist": {},
       "search": false,
       "songs": {
         
         "fetchSongsPending": true,
         "songDetails": null,
         "songId": 0,
         "songPaused": true,
         "songPlaying": false,
         "timeElapsed": 0,
         "viewType": "songs",
       },
       "sound": {
         "volume": 100,
       },
       "token": {
         "token": "",
       },
       "ui": {
         "title": "Browse",
       },
       "user": {
         "currentUser": "",
         "loading": true,
       },

    }

      expect(newState).toEqual(expectedState);
    });
   
    test.skip('updates state when songs fetched', () => {
      store.dispatch(fetchSongsSuccess());
      const newState = store.getState();
      const expectedState = { 
      songs: songs,
      fetchSongsError: false,
      fetchSongsPending: false,
      viewType: 'songs'
      }
      expect(newState).toEqual(expectedState);
    });
 



   });
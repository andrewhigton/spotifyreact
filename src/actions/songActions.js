import axios from 'axios';
import uniqBy from 'lodash/uniqBy';
import { setArtistIds } from './artistActions';

import { 
    SEARCH_SONGS_PENDING, 
    SEARCH_SONGS_SUCCESS,
    SEARCH_SONGS_ERROR
} from './actionTypes'


export const fetchSongsPending = () => {
  return {
    type: 'FETCH_SONGS_PENDING'
  };
};

export const fetchSongsSuccess = (songs) => {
  
  return {
    type: 'FETCH_SONGS_SUCCESS',
    songs
  };
};

export const fetchSongsError = () => {
  return {
    type: 'FETCH_SONGS_ERROR'
  };
};

export const fetchSongs = (accessToken) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/me/tracks?limit=10`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
      });

    dispatch(fetchSongsPending());

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      let artistIds = uniqBy(res.items, (item) => {
        return item.track.artists[0].name;
      }).map(item => {
        return item.track.artists[0].id;
      }).join(',');

      dispatch(setArtistIds(artistIds));

      dispatch(fetchSongsSuccess(res.items));
    }).catch(err => {
      dispatch(fetchSongsError(err));
    });
  };
};


export const searchSongsPending = () => {
  
  return {
    type: 'SEARCH_SONGS_PENDING'
  };
};

export const searchSongsSuccess = (songs) => {
  return {
    type: 'SEARCH_SONGS_SUCCESS',
    songs
  };
};

export const searchSongsError = () => {
  return {
    type: 'SEARCH_SONGS_ERROR'
  };
};

export const searchSongs = (searchTerm, accessToken) => {
    
    
    return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&market=GB&limit=10&offset=5`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
      });

    dispatch(searchSongsPending());
    fetch(request).then(function (res) {
            console.log(res)
            return res.json();
        }).then(res => {
      res.items = res.tracks.items.map(item => {
        
        return {
          track: item
        };
      });
      dispatch(searchSongsSuccess(res.items));
    }).catch(err => {
      dispatch(searchSongsError(err));
    });
  };
}


  export const updateViewType = (view) => {
    return {
      type: 'UPDATE_VIEW_TYPE',
      view
    };
};

export const fetchRecentlyPlayedPending = () => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_PENDING'
  };
};

export const fetchRecentlyPlayedSuccess = (songs) => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_SUCCESS',
    songs
  };
};

export const fetchRecentlyPlayedError = () => {
  return {
    type: 'FETCH_RECENTLY_PLAYED_ERROR'
  };
};

export const fetchRecentlyPlayed = (accessToken, dispatch) => {  
    return dispatch => {
      const request = new Request('https://api.spotify.com/v1/me/player/recently-played', {
      headers: new Headers ({
              'Authorization': 'Bearer '+ accessToken
                })
              }) 

              dispatch(fetchRecentlyPlayedPending())
              
              fetch(request).then(res => {
                return res.json();
                }).then(res => {
                  res.items = uniqBy(res.items, (item) => {
                    return item.track.id;
                  });
                  dispatch(fetchRecentlyPlayedSuccess(res.items));
              }).catch(err => {
      dispatch(fetchRecentlyPlayedError(err))
      })
    } 
  }


export const actionPlaySong = (song) => {
   console.log(song)
   return({
    type: 'PLAY_SONG',
    song
    })  
  };

export const actionStopSong = () => {
  return({
    type: 'STOP_SONG'
  });
}


export const actionPauseSong = () => {
  return({
    type: 'PAUSE_SONG'
  });
}

export const actionResumeSong = () => {
  return({
    type: 'RESUME_SONG'
  });
}

export const increaseSongTime = (time) => {
  return ({
    type: 'INCREASE_SONG_TIME',
    time
  });
};
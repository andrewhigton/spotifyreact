import axios from 'axios';

import { 
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_FEATURED_SUCCESS,
  FETCH_FEATURED_ERROR
} from './actionTypes'


export const fetchCategoriesSuccess = (dispatch, categories) => {
  return dispatch ({
    type: 'FETCH_CATEGORIES_SUCCESS',
    categories
  });
};

export const fetchCategoriesError = () => {
  return {
    type: 'FETCH_CATEGORIES_ERROR'
  };
};

export const fetchCategories = (dispatch, accessToken) => {

      try {
      axios.get('https://api.spotify.com/v1/browse/categories', {
      headers: {
              'Authorization': 'Bearer '+ accessToken
                }
              })  
              .then((res) => {
                let categoriesData = res.data.categories                
                fetchCategoriesSuccess(dispatch, categoriesData)
                })
      } catch(err) {
      dispatch({
        type: fetchCategoriesError(err)
      })
    } 
  }



export const fetchSongs = () => {
  
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/me/tracks?limit=50`, {
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
      // get all artist ids and remove duplicates
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

export const fetchFeaturedSuccess = (featured) => {
  
return {
    type: 'FETCH_FEATURED_SUCCESS',
    featured
  };
};

export const fetchFeaturedError = () => {
  return {
    type: 'FETCH_FEATURED_ERROR'
  };
};


export const fetchFeatured = (accessToken) => {
  
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: new Headers({
          'Authorization': 'Bearer '+ accessToken
      })
    });

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }

      return res.json();
    }).then(res => {
     
      let featuredData = res.playlists.items;
     dispatch(fetchFeaturedSuccess(featuredData))
    }).catch(err => {
      dispatch(fetchFeaturedError(err));
    });
  };
};

//   try {
//       axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
//       headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'text/plain',
//               'Authorization': 'Bearer '+ accessToken
//                 }
//               })  
//               .then((res) => {
//                 let categoriesData = res.data.playlists.items;
//               
//                 fetchFeaturedSuccess(categoriesData)
//               })
//       } catch(err) {
//       dispatch({
//         type: fetchCategoriesError(err)
//       })
//     } 
// };
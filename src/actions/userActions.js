// import axios from 'axios';

// import { 
//   FETCH_USER_SUCCESS,
//   FETCH_USER_ERROR,
//   LOGOUT_USER
// } from './actionTypes'

export const fetchUserSuccess = (user) => {
  // console.log(user)
  return{
    type: 'FETCH_USER_SUCCESS',
    user: user
  };
}; 

export const fetchUserError = () => {
  return {
    type: 'FETCH_USER_ERROR'
  };
};

export const fetchUser = (accessToken, dispatch) => {
  
  return dispatch => {  
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });
   
    fetch(request).then(res => {
   
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      dispatch(fetchUserSuccess(res));
    }).catch(err => {
      dispatch(fetchUserError(err));
    });   
  };
};

    // try {
    //   axios.get('https://api.spotify.com/v1/me', {
    //   headers: {
    //           'Authorization': 'Bearer '+ accessToken
    //             }
    //           })  
    //           .then((response) => {
    //             let userName = response.data.display_name;
                
    //               dispatch({
    //                 type: 'FETCH_USER_SUCCESS',
    //                 user: userName
    //               })
    //             })
    //             } catch(err) {
    //             dispatch({
    //               type: 'FETCH_USER_ERROR'
    //             })
    //         }  
    //       }

export const logoutUser = () => {
  
}

export const addSongToLibrarySuccess = (songId) => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_SUCCESS',
    songId
  };
};

export const addSongToLibraryError = () => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_ERROR'
  };
};

export const addSongToLibrary = (accessToken, id) => {

  return dispatch => {

    const request = new Request(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    fetch(request).then(res => {
      if(res.ok) {
        dispatch(addSongToLibrarySuccess(id));
      }
    }).catch(err => {
      dispatch(addSongToLibraryError(err));
    });
  };
};

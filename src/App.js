import React, { useEffect, useState, Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { setToken } from './actions/tokenActions';
import { fetchUser } from './actions/userActions';
import Footer from './components/Footer/Footer';
import MainView from './components/MainView/MainView';
import BrowseView from './components/BrowseView/BrowseView';
import LoginHeader from './components/LoginHeader/LoginHeader';
import MainHeader from './components/MainHeader/MainHeader';
import SideMenu from './components/SideMenu/SideMenu';
import * as config from './config/spotify'; 
import {
  actionPlaySong,
  actionStopSong,
  actionPauseSong,
  actionResumeSong,
} from './actions/songActions';
import { connect, useDispatch } from 'react-redux' 
import { fetchCategories, fetchFeatured } from './actions/browseActions'; 
import './App.css';

const App = ({
  categories, 
  user, 
  fetchCategories,
  fetchFeatured,
  actionPlaySong,
  actionStopSong,
  actionPauseSong,
  actionResumeSong,
  setToken,
  fetchUser
  }) => {
    
  let token;

  const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};


// https://pau1fitz.github.io/react-spotify/
// #access_token=BQAqRWtf8uK-LS_LcoRfV_FOOJjNPrT7byqLBN3xgKCL71LnGxrMuKKANsDIgMAxjYc5R46mT5rtxnaadhTk7oaX8JvggFZjvfmPzjw-3gCxUezkUMtEzJH4-XVp9w58zMpIdt7bx0ZdwMplnAhXicuXCYWvVmuxAkK2wSv981miNGjxbAJ_mwVtwH1AEqi8whae25jzEqDXZcSrlnD-pQCUTB1hf32nvZeLZhBgry6YpOdKPivf517mA4I_UenEy2FNDSpnSvIVgFY
// &token_type=Bearer
// &expires_in=3600

// http://localhost:3000/
// #access_token=BQBDldSDjj58WljgqXVgzoPW8uQKwdfqMcE72J-zlg0eeBKKyYUYhNnsvwVNDmhTB22qYqBGxW22we1kAwWvKJ-k9PNBizvJb-q4SBHU3mQe5pjQdnZ94JxUNLy_XGK_4HTs3dgB-9oIkduRouKbpVJw200fVOC_vwJSopSpY3OAc8xLgvCXDpfRlNg1sJc5ecUeigML2ePLiDDaX2SMzTY361JDgFhC6XT1iADY_McWwcVKEHX7rP_CgQBYwa4C_A0S2CiCcwtgnU4
// &token_type=Bearer
// &expires_in=3600


const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = config.API_KEY;
// const redirectUri = 'https://andrewhigton.github.io/spotify-react/';
const redirectUri = 'http://localhost:3000/';
const scopes = [
  'user-read-private',
  'user-read-email',
];

useEffect(() => {
  
const hash = getTokenFromUrl();

    window.location.hash = "";
    token = hash.access_token;
    if (!token) {
      window.location.href = `${authEndpoint}?client_id=${clientId}&scope=${scopes.join("%20")}&response_type=token&show_dialog=false&redirect_uri=${redirectUri}`
      // window.location.href = `${authEndpoint}?client_id=${clientId}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true&redirect_uri=${redirectUri}`
      
      // 'https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a
      // &scope=playlist-read-private
      // %20playlist-read-collaborative
      // %20playlist-modify-public
      // %20user-read-recently-played
      // %20playlist-modify-private
      // %20ugc-image-upload
      // %20user-follow-modify
      // %20user-follow-read
      // %20user-library-read
      // %20user-library-modify
      // %20user-read-private
      // %20user-read-email
      // %20user-top-read
      // %20user-read-playback-state&response_type=token
      // &redirect_uri=http://localhost:3000/callback';
      } else {
      setToken(token);
      fetchUser(token);
    }
}, []);
  
  let audio;

  useEffect( () => {
    // fetchFeatured()
    fetchFeatured(token)
  }, [fetchFeatured])

  const stopSong = () => {
    if (audio) {
      actionStopSong();
      audio.pause();
    }
  };

  const pauseSong = () => {
    
    if (audio) {
      actionPauseSong();
      audio.pause();
    }
  };

  const resumeSong = () => {

    if (audio) {
      actionResumeSong();
      audio.play();
    }
  };

  const audioControl = (song) => {
   
    if (audio === undefined) {
  
      actionPlaySong(song);
      
      audio = new Audio(song.preview_url);
      audio.play();
  
    } else {
  
      stopSong();
      audio.pause();
      audio = new Audio(song.preview_url);
  
      actionPlaySong(song);
      audio.play();
    }
  };

    return (
      
      
      <div className='component-app'>
        <div className='app-container'>
          <div className='left-side-section'>
            <SideMenu />
          </div>
          <div className='main-section' data-test='component-app'>
            <div className='main-section-container'>
              <Fragment>
              {user ? 
              <Fragment>
                <MainHeader data-test='main-head' />
                <p>{user}</p>                
              </Fragment> :
              <Fragment>
                <LoginHeader/>
              </Fragment> 
              }
              <MainView 
                  pauseSong={pauseSong}
                  resumeSong={resumeSong}
                  audioControl={audioControl}
                />
              </Fragment>
            </div>
          </div>
          <Footer 
            stopSong={stopSong}
            pauseSong={pauseSong}
            resumeSong={resumeSong}
            audioControl={audioControl}
          />
        </div>
      </div>
      
      )
  }  


const mapStateToProps = state => (
    { 
      categories: state.browse.categories, 
      loading: state.browse.loading, 
      user: state.user.currentUser,
      token: state.token.token
    }
  )

const mapDispatchToProps = (dispatch) => {
      return {
      actionPlaySong: (song) => { dispatch(actionPlaySong(song)) },
      actionStopSong: () => { dispatch(actionStopSong()) },
      actionPauseSong:() => { dispatch(actionPauseSong()) },
      actionResumeSong: () => { dispatch(actionResumeSong()) },
      fetchFeatured: (token) => { dispatch(fetchFeatured(token)) },
      fetchUser: (token) => dispatch(fetchUser(token)),
      setToken: (token) => dispatch(setToken(token))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
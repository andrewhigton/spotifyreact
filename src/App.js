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

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = config.API_KEY;
const redirectUri = 'https://andrewhigton.github.io/spotifyreact/';
const scopes = [
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-read-recently-played',
];

useEffect(() => {
  

const hash = getTokenFromUrl();

    window.location.hash = "";
    token = hash.access_token;
    if (!token) {
        window.location.href = `${authEndpoint}?client_id=${clientId}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true&redirect_uri=${redirectUri}`
    
            } else {
      setToken(token);
      fetchUser(token);
    }
}, []);
  
  let audio;

  useEffect( () => {
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
      
      
      <div data-test='component-app' className='component-app'>
        <div  className='app-container'>
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
                <LoginHeader data-test='login-head'/>
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
          <Footer data-test='footer-component'
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

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
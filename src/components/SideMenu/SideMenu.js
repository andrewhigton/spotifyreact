import React, { Fragment, useState } from 'react';
import TrackSearch from '../TrackSearch/TrackSearch';
import UserPlaylists from '../UserPlaylists/UserPlaylists'; 
import { setSearchStatus } from '../../actions/searchActions';
import { connect, useDispatch } from 'react-redux'; 
import { fetchSongs, fetchRecentlyPlayed, updateViewType } from '../../actions/songActions';
import { fetchAlbums } from '../../actions/albumActions';
import { fetchFeatured, fetchCategories } from '../../actions/browseActions';
import { updateHeaderTitle } from '../../actions/userinterfaceActions';

import './SideMenu.css';

const SideMenu = ({
  updateHeaderTitle,
  updateViewType,
  fetchFeatured,
  fetchRecentlyPlayed,
  fetchSongs,
  fetchAlbums,
  token,
  title,
  artistIds
}) => {
  
  const dispatch = useDispatch();

  const handleClick = name => {
    updateHeaderTitle(name);
    updateViewType(name);
  };

  const handleBrowseClick = () => {
    updateHeaderTitle('Browse');
    updateViewType('Browse');
    fetchFeatured(token);
  };

  const renderSideMenu = () => {
    const menu = [
      {
        name: 'Recently Played',
        action: fetchRecentlyPlayed
      },
      {
        name: 'Songs',
        action: fetchSongs
      },
      {
        name: 'Albums',
        action: fetchAlbums
      }
    ];

    return menu.map(item => {
      return (
        <li
          key={item.name}
          className={
            title === item.name ? 'active side-menu-item' : 'side-menu-item'
          }
          onClick={() => {
            item.getArtists
              ? item.action(token, artistIds)
              : item.action(token);
            handleClick(item.name);
          }}
        >
          {item.name}
        </li>
      );
    });
  };

  return (
    <div>
    <ul className='side-menu-container'>
      <li
        onClick={handleBrowseClick}
        className={
          title === 'Browse' ? 'active side-menu-item' : 'side-menu-item'
        }
      >
        Browse
      </li>
      <li className='side-menu-item radio'></li>
      <h3 className='user-library-header'>Your Library</h3>
      {renderSideMenu()}
    </ul>
    
    <Fragment>  
      <h3 className='user-library-header'>Your Playlists</h3>
      <UserPlaylists />
    </Fragment>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    userId: state.user.user ? state.user.user.id : '',
    token: state.token.token ? state.token.token : '',
    artistIds: state.artists.artistIds,
    title: state.ui.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecentlyPlayed: (token) => dispatch(fetchRecentlyPlayed(token)) ,
    fetchSongs: (token) => dispatch(fetchSongs(token)),
    fetchAlbums: (token) => dispatch(fetchAlbums(token)),
    fetchArtists: (token) => dispatch(fetchArtists(token)), 
    fetchFeatured: (token) => dispatch(fetchFeatured(token)),
    updateViewType: (name) => dispatch(updateViewType(name)),
    updateHeaderTitle: (name) => dispatch(updateHeaderTitle(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
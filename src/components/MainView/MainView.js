import React, { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux'; 
import BrowseView from '../BrowseView/BrowseView';
import PropTypes from 'prop-types';
import SongList from '../SongList/SongList';
import AlbumList from '../AlbumList/AlbumList';
import AlbumSongs from '../AlbumSongs/AlbumSongs';
import ArtistList from '../ArtistList/ArtistList';
import './MainView.css';

  const MainView = ({ 
    headerTitle,
    audioControl, 
    resumeSong, 
    pauseSong  

    }) => {
    
    return (
    <Fragment>
      {headerTitle === "Albums" ? (
        <AlbumList audioControl={audioControl} />
      ) : headerTitle === "Artists" ? (
        <ArtistList />
      ) : headerTitle === "Browse" ? (
        <BrowseView />
      ) : headerTitle === "AlbumSongs" ? (
        <AlbumSongs 
          resumeSong={resumeSong}
          pauseSong={pauseSong}
          audioControl={audioControl} />
      ) : (
      //anything else show SongList
        <SongList
          resumeSong={resumeSong}
          pauseSong={pauseSong}
          audioControl={audioControl}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = state => (
    {
      headerTitle: state.ui.title
    }
  )

export default connect(mapStateToProps)(MainView);
import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSongs } from '../../actions/songActions';
import { addSongToLibrary } from '../../actions/userActions';
import './SongList.css';


const SongList = ({
    songs,
    fetchSongsError,
    fetchSongsPending,
    fetchPlaylistSongsPending,
    songPlaying,
    songPaused,
    songId,
    songAddedId,
    viewType,
    pauseSong,
    resumeSong,
    audioControl
      
    }) => { 

  const msToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const renderCon = () => {
      return <p>return</p>
  }

  const renderSongs = () => {
   
    if(songs) {
      
    return songs.map((song, i) => {
      

      if(song.track) {    
      const buttonClass =
        song.track.id === songId && !songPaused
          ? "fa-pause-circle-o"
          : "fa-play-circle-o";
    
      
      return (

        <li
          className={
            song.track.id === songId
              ? "active user-song-item"
              : "user-song-item"
          }
          key={i}
        >
          <div
            onClick={() => {
              song.track.id === songId &&
                songPlaying &&
                songPaused
                ? resumeSong()
                : songPlaying &&
                  !songPaused &&
                  song.track.id === songId
                  ? pauseSong()
                  : audioControl(song.track);
            }}
            className="play-song"
          >
            <i className={`fa ${buttonClass} play-btn`} aria-hidden="true" />
          </div>

          {viewType !== "songs" && (
            <p
              className="add-song"
              onClick={() => {
                addSongToLibrary(token, song.track.id);
              }}
            >
              {songAddedId === song.track.id ? (
                <i className="fa fa-check add-song" aria-hidden="true" />
              ) : (
                  <i className="fa fa-plus add-song" aria-hidden="true" />
                )}
            </p>
          )}

          {viewType === "songs" && (
            <p className="add-song">
              <i className="fa fa-check" aria-hidden="true" />
            </p>
          )}

          <div className="song-title">
            <p>{song.track.name}</p>
          </div>


          <div className="song-artist">
            {<p>{song.track.artists[0].name}</p>}
          </div>

          <div className="song-album">
            {<p>{song.track.album.name}</p>}
          </div>

          <div className="song-added">
            <p>{moment(song.added_at).format("YYYY-MM-DD")}</p>
          </div>

          <div className="song-length">
            <p>{msToMinutesAndSeconds(song.duration_ms)}</p>
          </div>
        </li>
      );
      }
    });

    }
  }

  
    return (
      <div>
        <div className="song-header-container">
          <div className="song-title-header">
            <p>Title</p>
          </div>
          <div className="song-artist-header">
            <p>Artist</p>
          </div>
          <div className="song-album-header">
            <p>Album</p>
          </div>
          <div className="song-added-header">
            <i className="fa fa-calendar-plus-o" aria-hidden="true" />
          </div>
          <div className="song-length-header">
            <p>
              <i className="fa fa-clock-o" aria-hidden="true" />
            </p>
          </div>
        </div>
        {
          songs && !fetchSongsPending && !fetchPlaylistSongsPending && 
           renderCon(),
           renderSongs()    
        }
      </div>
    );  
}


const mapStateToProps = (state) => {

  return {
    token: state.token.token ? state.token.token : '',
    songs: state.songs.songs,
    fetchSongsError: state.songs.fetchSongsError,
    fetchSongsPending: state.songs.fetchSongsPending,
    fetchPlaylistSongsPending: state.songs.fetchPlaylistSongsPending,
    songPlaying: state.songs.songPlaying,
    songPaused: state.songs.songPaused,
    songId: state.songs.songId,
    viewType: state.songs.viewType,
  };

};

const mapDispatchToProps = dispatch => {
      return {
      fetchSongs: () => dispatch(fetchSongs()),
    }
  };


export default connect(mapStateToProps, mapDispatchToProps)(SongList);
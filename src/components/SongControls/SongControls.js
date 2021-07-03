import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { actionResumeSong, actionPauseSong, actionStopSong } from '../../actions/songActions';
import { bindActionCreators } from 'redux';
import { increaseSongTime } from '../../actions/songActions';
import './SongControls.css';

const SongControls = ({
	  songName,
    artistName,
    songPlaying,
    songPaused,
    timeElapsed,
    songDetails,
    pauseSong,
    resumeSong,
    stopSong,
    audioControl,
    songs,
    increaseSongTime
	}) => { 

  let intervalId;
  
  useEffect(() => {  
    if(songPlaying) {  
     intervalId = setInterval(() => {
      updateTime()
     }, 1000);
     }
      return () => clearInterval(intervalId);
  }, [timeElapsed]); 

const updateTime = () => {
    if (timeElapsed === 30) {
        stopSong();  
        clearInterval(intervalId);
      } else {
        increaseSongTime(timeElapsed + 1)
      }
  }

  useEffect(() => {  
  if(songPlaying && timeElapsed === 0) {
      updateTime();
  }
}, [songPlaying, timeElapsed]); 

  const getSongIndex = () => {
    const currentIndex = songs.map((song, index) => {
  
        if (song.track.id === songDetails.id) {
        
        return index;
      } else {
        return undefined;
      }//not sure what this does? 
    }).filter(item => {
      return item !== undefined;
    })[0];

    return currentIndex;
  }

  const nextSong = () => {
    let currentIndex = getSongIndex();
    currentIndex === songs.length - 1 ? audioControl(songs[0].track) : audioControl(songs[currentIndex + 1].track);
  }

  const prevSong = () => {
    let currentIndex = getSongIndex();
    currentIndex === 0 ? audioControl(songs[songs.length - 1].track) : audioControl(songs[currentIndex - 1].track);
  }

   const showPlay = songPaused ? 'fa fa-play-circle-o play-btn' : 'fa fa-pause-circle-o pause-btn';

    return (
      <div className='song-player-container'>

        <div className='song-details'>
          <p className='song-name'>{songName}</p>
          <p className='artist-name'>{artistName}</p>
        </div>

      <div className='song-controls'>

          <div onClick={prevSong} className='reverse-song'>
            <i className="fa fa-step-backward reverse" aria-hidden="true" />
          </div>

          <div className='play-btn'>
            <i onClick={!songPaused ? pauseSong : resumeSong} className={"fa play-btn" + showPlay} aria-hidden="true" />
          </div>

          <div onClick={nextSong} className='next-song'>
            <i className="fa fa-step-forward forward" aria-hidden="true" />
          </div>

        </div>

        {<div className='song-progress-container'>
          {<p className='timer-start'>{moment().minutes(0).second(timeElapsed).format('m:ss')}</p>}
          <div className='song-progress'>
            <div style={{ width: timeElapsed * 16.5 }} className='song-expired' />
          </div>
          <p className='timer-end'>{moment().minutes(0).second(30 - timeElapsed).format('m:ss')}</p>
        </div>}

      
      </div>
   
    );
  }

const mapStateToProps = state => {
  return {
    songName: state.songs.songDetails ? state.songs.songDetails.name : '',
    artistName: state.songs.songDetails ? state.songs.songDetails.artists[0].name : '',
    songPlaying: state.songs.songPlaying,
    timeElapsed: state.songs.timeElapsed,
    songDetails: state.songs.songDetails,
    songPaused: state.songs.songPaused,
    songs: state.songs.songs
  };
};

const mapDispatchToProps = dispatch => {
  return {
      increaseSongTime: (time) => dispatch(increaseSongTime(time))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SongControls);
import React from 'react';
import PropTypes from 'prop-types';
import SongControls from '../SongControls/SongControls';
import VolumeControls from '../VolumeControls/VolumeControls';
import './Footer.css';

const Footer = ({ stopSong, pauseSong, resumeSong, audioControl }) => (
  <div className='footer'>
    <SongControls
      stopSong={stopSong}
      pauseSong={pauseSong}
      resumeSong={resumeSong}
      audioControl={audioControl}
    />
    <VolumeControls />
  </div>
);

export default Footer;
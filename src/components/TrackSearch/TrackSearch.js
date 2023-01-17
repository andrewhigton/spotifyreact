// import React, { Component, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { searchSongs } from '../../actions/songActions';
import { updateViewType } from '../../actions/songActions';
import { updateHeaderTitle } from '../../actions/userinterfaceActions';
import './TrackSearch.css';

const TrackSearch = () => {
     
  const [state, setState] = React.useState('')


  const updateSearchTerm = e => {
    setState(e.target.value);
  };

  const searchSpotify = () => {
      updateViewType(state);
  }

  return (
        
        <div data-test='track-search' className={'track-search-container searchActive'}>
           <form
          onSubmit={() => {
            fetchSongs(searchTerm);
          }}
          >
          <input
            data-test='input-box'
            onChange={updateSearchTerm}
            type='text'
            placeholder='Search...'
          />
          <button
            data-test='submit-button'
            onClick={(e) => {
              e.preventDefault();
              // setState('') 
              searchSpotify(state); 
            }}
          >
            <i className='fa fa-search search' aria-hidden='true' />
          </button>
        </form>
        </div>
      )
    }


const mapStateToProps = state => (
    {
      searchStatus: state.search,
      token: state.token.token
    }
  )

const mapDispatchToProps = (dispatch) => {
      return {
      searchSongs: (state, token) => dispatch(searchSongs(state, token)),
      updateViewType: (state) => dispatch(updateViewType(state)),
      updateHeaderTitle: (state) => dispatch(updateHeaderTitle(state))
    }
};

export default TrackSearch;
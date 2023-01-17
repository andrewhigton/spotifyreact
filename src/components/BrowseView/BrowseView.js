import React, { useState, useEffect, useSelector, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux'; 
import { fetchCategories } from '../../actions/browseActions';
import { fetchPlaylistSongs, addPlaylistItem } from '../../actions/playlistActions';
import PropTypes from 'prop-types';
import { updateHeaderTitle } from '../../actions/userinterfaceActions';
import './BrowseView.css';

  const BrowseView = ({ 
    browse, 
    viewType,
    loading,
    token, 
    fetchPlaylistSongs, 
    updateHeaderTitle, 
    addPlaylistItem,
    user
     }) => {

  let browseView;
  if (browse) { 
    
    browseView = browse.map((item, i) => {
      // console.log(item);
      const getPlaylistSongs = () => { 
        updateHeaderTitle(item.name);
        fetchPlaylistSongs(item.owner.id, item.id, token);
      };
      
      return (
        <div>
          <li data-test='playlist-titles' key={i} onClick={getPlaylistSongs} className='category-item' key={i}>
            <div className='category-image'>   
                <p className='category-name'>{item}</p>
     
            </div>
          </li>
        </div>
      );
    });
  }

  return (
      <Fragment>
        <div data-test='browse-view'>
        { browseView ? <ul key={0} className='browse-view-container'>{browseView}</ul> : <p>please wait</p> }
        </div>
      </Fragment>
  );
};


const mapStateToProps = state => (
    { 
      browse: state.browse.view, 
      loading: state.browse.loading,
      viewType: state.songs.viewType,
      token: state.token.token,
      user: state.user.user 
    }
  )

const mapDispatchToProps = (dispatch) => {
      return {
      fetchPlaylistSongs: (owner, item, token) => dispatch(fetchPlaylistSongs(owner, item, token)),
      updateHeaderTitle: (item) => dispatch(updateHeaderTitle(item)),
    }
  };

// export default BrowseView;
export default connect(mapStateToProps, mapDispatchToProps)(BrowseView);
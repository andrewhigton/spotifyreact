import React, { useState, useEffect, useSelector, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux'; 
import { fetchCategories } from '../../actions/browseActions';
import { fetchPlaylistSongs, addPlaylistItem } from '../../actions/playlistActions';
import PropTypes from 'prop-types';
import { updateHeaderTitle } from '../../actions/userinterfaceActions';
import './BrowseView.css';

  const BrowseView = ({ 
    view, 
    viewType,
    loading,
    token, 
    fetchPlaylistSongs, 
    updateHeaderTitle, 
    addPlaylistItem,
    user
     }) => {

  // const view = useSelector(state => state.view); 

  let browseView;
  
  if (view) { 
  
    browseView = view.map((item, i) => {
      
      const getPlaylistSongs = () => { 
        updateHeaderTitle(item.name);
        fetchPlaylistSongs(item.owner.id, item.id, token);
      };
      
      return (
        <div data-test='browse-view'>
          <li onClick={getPlaylistSongs} className='category-item' key={i}>
            <div className='category-image'>
              <img alt='category' src={item.icons ? item.icons[0].url : item.images[0].url} />
                <p className='category-name'>{item.name}</p>
            </div>
          </li>
        </div>
      );
    });
  }

  return (

      <Fragment>
      {browseView ? <ul className='browse-view-container'>{browseView}</ul>   :
      <p>please wait</p>
      }
      </Fragment>

  );
};


const mapStateToProps = state => (
    { 
      view: state.browse.view, 
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
      // addPlaylistItem,
      // fetchCategories: () => dispatch(fetchFeatured(token, dispatch)),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(BrowseView);
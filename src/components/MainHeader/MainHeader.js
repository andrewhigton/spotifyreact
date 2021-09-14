import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { logoutUser } from '../../actions/userActions';
import { connect } from 'react-redux';
import TrackSearch from '../TrackSearch/TrackSearch';
import {
  fetchCategories,
  fetchNewReleases,
  fetchFeatured
} from '../../actions/browseActions';
import { updateHeaderTitle } from '../../actions/userinterfaceActions';
import { updateViewType } from '../../actions/songActions';
import './MainHeader.css';


const MainHeader = ({user, 
                    updateHeaderTitle, 
                    updateViewType, 
                    headerTitle, 
                    viewType, 
                    token
                  }) => {
 
  return (
      <div data-test='main-head'> 
        <TrackSearch />
      <div className='section-title'> 

       {(headerTitle === 'Browse') && (
        <div data-test='browse-head'>
          <h3 className='header-title'>{headerTitle}</h3>
          <div className='browse-headers'>
            <p 
              className={viewType === 'Featured' ? 'active' : ''} 
              onClick={() => { 
                updateViewType('Featured'); 
                updateHeaderTitle('Browse'); 
              }}>Featured</p>
          </div>
        </div>
      )}
       </div>
       </div>
    )
};


const mapStateToProps = state => (
    { 
      user: state.user.currentUser,
      loading: state.user.loading,
      headerTitle: state.ui.title,
      token: state.token.token,
      viewType: state.songs.viewType
    }
  )

const mapDispatchToProps = (dispatch) => {
      return {
      updateHeaderTitle,
      updateViewType
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
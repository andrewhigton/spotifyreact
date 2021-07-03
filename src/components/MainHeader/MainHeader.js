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
      <Fragment> 
        <TrackSearch />
      <div className='section-title' data-test='main-head'> 


       {(headerTitle === 'Browse') && (
        <div>

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
       </Fragment>
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
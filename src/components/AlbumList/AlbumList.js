import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { fetchAlbumSongs, fetchAlbumsPending } from '../../actions/albumActions';
import { updateViewType } from '../../actions/songActions';
import { updateHeaderTitle } from '../../actions/userinterfaceActions';
import uniqBy from "lodash/uniqBy";
import "./AlbumList.css";

const AlbumList = ({ 
  albumList,
  token,
  fetchAlbumSongs,
  fetchAlbumsPending,
  fetchAlbumTracks,
  updateHeaderTitle,
  updateViewType
}) => {

const renderAlbums = () => {
    return albumList.map((album, i) => {

      let albumId = album.album.id
      return (
        <li
          onClick={() => {
            fetchAlbumSongs(token, albumId)
            updateHeaderTitle('AlbumSongs');
            updateViewType('AlbumSongs');
          }}
          className="album-item"
          key={i}
        >
          <div>
            <div className="album-image">
              <img alt="album" src={album.album.images[0].url} />
              <div className="play-song">
                <i
                  className="fa fa-play-circle-o play-btn"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="album-details">
              <p className="album-name">{album.album.name}</p>
              <p className="artist-name">{album.album.artists[0].name}</p>
            </div>
          </div>
        </li>
      );
    });
  };
    
  return  albumList && !fetchAlbumsPending ? <ul className="album-view-container">{renderAlbums()}</ul> :  <p>please wait</p> ;
};
  

const mapStateToProps = state => {
  return {
    albumList: state.albums.albums,
    token: state.token.token ? state.token.token : '',
    fetchAlbumsPending: state.albums.fetchAlbumsPending,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumSongs: (token, id) => dispatch(fetchAlbumSongs(token, id)),
    updateHeaderTitle: (name) => dispatch(updateHeaderTitle(name)),
    updateViewType: (name) => dispatch(updateViewType(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
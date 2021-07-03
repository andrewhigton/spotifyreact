import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylistsMenu, fetchPlaylistSongs } from '../../actions/playlistActions';
import { updateHeaderTitle } from '../../actions/userinterfaceActions';
import './UserPlaylists.css';

const UserPlaylists = ({
  userId,
  token,
  fetchPlaylistSongs,
  fetchPlaylistsMenu,
  updateHeaderTitle,
  playlistMenu
  }) => {

// console.log(userId)
if(userId !== '' && token !== '') {
      fetchPlaylistsMenu(userId, token);
    }

const renderPlaylists = () => {
    return playlistMenu.map(playlist => {
      // console.log(playlist)
      const getPlaylistSongs = () => {
        fetchPlaylistSongs(
          playlist.owner.id,
          playlist.id,
          token
        );
        updateHeaderTitle(playlist.name);
      };

      let title;

      return (
        <li
          onClick={getPlaylistSongs}
          className={
            title === playlist.name
              ? 'active side-menu-item'
              : 'side-menu-item'
          }
          key={playlist.id}
        >
          {playlist.name}
        </li>
      );
    });
  }


    return (
      <div className='user-playlist-container'>
        <h3 className='user-playlist-header'>Playlists</h3>
        {playlistMenu && renderPlaylists()}
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.currentUser ? state.user.currentUser : '',
    playlistMenu: state.playlist.playlistMenu ? state.playlist.playlistMenu : '',
    token: state.token.token ? state.token.token : '',
    title: state.ui.title
  };
};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchPlaylistsMenu,
    fetchPlaylistSongs,
    updateHeaderTitle
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);

// class UserPlaylists extends Component {
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.userId !== ' && nextProps.token !== ') {
//       this.props.fetchPlaylistsMenu(nextProps.userId, nextProps.token);
//     }
//   }

//   renderPlaylists() {
//     return this.props.playlistMenu.map(playlist => {
//       const getPlaylistSongs = () => {
//         this.props.fetchPlaylistSongs(
//           playlist.owner.id,
//           playlist.id,
//           this.props.token
//         );
//         this.props.updateHeaderTitle(playlist.name);
//       };

//       return (
//         <li
//           onClick={getPlaylistSongs}
//           className={
//             this.props.title === playlist.name
//               ? 'active side-menu-item'
//               : 'side-menu-item'
//           }
//           key={playlist.id}
//         >
//           {playlist.name}
//         </li>
//       );
//     });
//   }

//   render() {
//     return (
//       <div className='user-playlist-container'>
//         <h3 className='user-playlist-header'>Playlists</h3>
//         {this.props.playlistMenu && this.renderPlaylists()}
//       </div>
//     );
//   }
// }


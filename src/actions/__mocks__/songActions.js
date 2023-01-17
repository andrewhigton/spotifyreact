let songs = ['the beatles']

module.exports = {
  ...jest.requireActual('./songActions'),
  __esModule: true,
  fetchSongsSuccess: jest.fn().mockReturnValue({
    type: 'FETCH_SONGS_SUCCESS',
    songs
  }),
}


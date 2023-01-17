import moxios from 'moxios';
import { fetchSongsSuccess } from './songActions';
import { FETCH_SONGS_SUCCESS } from './actionTypes'; 

describe('fetch songs success', () => {

	let songs = {songs: 'beatles'}
	
	test('songs are returned', () => {	
		const action = fetchSongsSuccess({songs: 'beatles'})
		expect(action).toStrictEqual({ type: FETCH_SONGS_SUCCESS, songs});
	})
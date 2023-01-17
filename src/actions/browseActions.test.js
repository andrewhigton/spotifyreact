import moxios from 'moxios';
import { fetchFeatured, fetchFeaturedSuccess } from './browseActions';

let featured;



describe('fetchFeaturedSuccess', () => {
		test.skip('returns an action with FETCH_FEATURED_SUCCESS and featured', () => {
		

		const action = fetchFeaturedSuccess();
		expect(action).toStrictEqual({type: 'FETCH_FEATURED_SUCCESS', featured})
		})		
	})		
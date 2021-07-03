import moxios from 'moxios';
import { fetchFeatured, fetchFeaturedSuccess } from './browseActions';


// describe('fetchFeaturedSuccess', () => {


let featured;
//  = {
// 	'name': 'talking heads',
// 	'title': 'once in a lifetime'
// }



describe('fetchFeaturedSuccess', () => {
		test('returns an action with FETCH_FEATURED_SUCCESS and featured', () => {
		

		const action = fetchFeaturedSuccess();
		expect(action).toStrictEqual({type: 'FETCH_FEATURED_SUCCESS', featured})
		})		
	})		


// describe('returns an action with FETCH_FEATURED_SUCCESS', () => {
	
// 	beforeEach(() => {
// 		moxios.install();
// 	})

// 	afterEach(() => {
// 		moxios.uninstall();
// 	})

// 	test('featured songs returned', () => {
// 		moxios.wait(() => {
// 		const request = moxios.requests.mostRecent();
// 		request.respondWith({
// 			status: 200,
// 			response: { 'name': 'talking heads',
// 						'title': 'once in a lifetime'
// 					}
// 			}) 
// 			})		
	
// 		return fetchFeaturedSuccess()
// 		.then((featured) => {
// 			expect(featured).toBe({
// 				'name': 'talking heads',
// 				'title': 'once'
// 			})
// 		}) 

// 	})


	// const action = fetchFeaturedSuccess( {type: 'FETCH_FEATURED_SUCCESS', featured});
	// const action = fetchFeaturedSuccess(featured);
	// expect(action).toEqual({ 'featured': featured, 'type': 'FETCH_FEATURED_SUCCESS' })
// 	})
// })

// { type: 'FETCH_SONGS_SUCCESS', featured }

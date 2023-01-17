import  { userReducer, actionTypes } from './userReducer';

describe('testing user update', () => {

	const initialState = { currentUser: 'aah101', loading: false}


	test('returns default initial state of `` when no action passed', () => {
	const newState = userReducer(undefined, {});
	expect(newState).toStrictEqual({"currentUser": '', "loading": true})
	})

	let testUser = {
		user: {
			display_name: 'aah101',
		},
		loading: false,
		type: actionTypes.FETCH_USER_SUCCESS,
	}

	let testUser1 = 'aah101';		


	test('returns state of true upon receiving action of type `FETCH_USER_SUCCESS`', () => {
		
	const newState = userReducer(undefined, testUser);
	expect(newState).toStrictEqual({"currentUser": 'aah101', "loading": false})
	})

})

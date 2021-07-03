import browseReducer from './browseReducer';

test('when previous state is undefined, return false', () => {
  const newState = browseReducer(undefined, {});
  // expect(newState).toEqual({ 'featured': undefined, 'type': 'FETCH_FEATURED_SUCCESS' })
  expect(newState).toStrictEqual({});
});

test('return previous state when unknown action type', () => {
  const newState = browseReducer(undefined, {});
  expect(newState).toStrictEqual({});
});

test('return ACTION and Featured for action type FETCH_FEATURED_SUCCESS', () => {
  let featured;
  const newState = browseReducer(false, { type: 'FETCH_FEATURED_SUCCESS' });
  expect(newState).toStrictEqual({view: featured, fetchFeaturedError: false} );
});

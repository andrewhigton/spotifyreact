export const browseReducer = (state = {}, action) => {
  
  switch (action.type) {
  
  case 'FETCH_CATEGORIES_SUCCESS':
    return {
      ...state,
      view: action.featured.items,
      loading: false,
      fetchCategoriesError: false
    };

  case 'FETCH_CATEGORIES_ERROR':
    return {
      ...state,
      error: true,   
      fetchCategoriesError: true
    };

  case 'FETCH_FEATURED_SUCCESS':
    return {
      ...state,
      view: action.featured,
      fetchFeaturedError: false
    };

  case 'FETCH_FEATURED_ERROR':
    return {
      ...state,
      fetchFeaturedError: true
    };

  default:
    return state;
  }
};

export default browseReducer;
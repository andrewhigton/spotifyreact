const defaultState = {
  title: 'Browse'
};

export const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_HEADER_TITLE':
      return {
        ...state,
        title: action.title
      };

    default:
      return state;
  }
};

export default uiReducer;
import * as actionTypes from "../constants/bookMarkConstants";

export const getBookmarksReducer = (state = { bookmarks: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKMARKS_SUCCESS:
      return {
        bookmarks: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addBookmarkReducer = (state = { bookmarks: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOKMARK_SUCCESS:
      return {
        bookmarks: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteBookmarkReducer = (state = { bookmarks: [] }, action) => {
  switch (action.type) {
    case actionTypes.DELETE_BOOKMARK_SUCCESS:
      return {
        bookmarks: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

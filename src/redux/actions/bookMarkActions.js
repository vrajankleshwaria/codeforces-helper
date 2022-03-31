import * as actionTypes from "../constants/bookMarkConstants";

const LOCAL_STORAGE_KEY = "bookMarks";
let bookMark = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export const getBookmarks = () => (dispatch) => {
  bookMark = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  dispatch({
    type: actionTypes.GET_BOOKMARKS_SUCCESS,
    payload: bookMark,
  });
};

export const addBookmark = (data) => (dispatch) => {
  bookMark = [...bookMark, data];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookMark));
  dispatch({
    type: actionTypes.ADD_BOOKMARK_SUCCESS,
    payload: bookMark,
  });
};

export const deleteBookmark = (data) => (dispatch) => {
  bookMark = bookMark.filter((bookmark) => bookmark !== data);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookMark));
  dispatch({
    type: actionTypes.DELETE_BOOKMARK_SUCCESS,
    payload: [],
  });
};

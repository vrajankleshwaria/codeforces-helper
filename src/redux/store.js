import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getBookmarksReducer,
  addBookmarkReducer,
  deleteBookmarkReducer,
} from "./reducers/bookMarkReducer";

const middleware = [thunk];
const initialState = {};

const reducer = combineReducers({
  getBookmarks: getBookmarksReducer,
  addBookmark: addBookmarkReducer,
  deleteBookmark: deleteBookmarkReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

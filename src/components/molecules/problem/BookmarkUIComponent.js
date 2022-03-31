import React, { useEffect } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookmarks,
  addBookmark,
  deleteBookmark,
} from "../../../redux/actions/bookMarkActions";

const BookmarkUIComponent = (data) => {
  const { row, index } = data;
  const { id, contestId } = row;
  const dispatch = useDispatch();
  let { bookmarks } = useSelector((state) => state.getBookmarks);
  let problemId = id + contestId;

  useEffect(() => {
    dispatch(getBookmarks());
  }, []);

  const addBookMarkHandler = (bookmark) => {
    dispatch(addBookmark(bookmark));
    dispatch(getBookmarks());
  };

  const deleteBookmarkHandler = (bookmark) => {
    dispatch(deleteBookmark(bookmark));
    dispatch(getBookmarks());
  };

  return (
    <td className="margin1" key={index}>
      {bookmarks !== undefined && bookmarks.includes(problemId) ? (
        <FaBookmark
          color="blue"
          onClick={() => deleteBookmarkHandler(problemId)}
        />
      ) : (
        <FaRegBookmark
          color="blue"
          onClick={() => addBookMarkHandler(problemId)}
        />
      )}
    </td>
  );
};

export default BookmarkUIComponent;

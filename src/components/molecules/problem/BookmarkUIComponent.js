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

  const addBookMarkHandler = () => {
    dispatch(addBookmark(problemId));
    dispatch(getBookmarks());
  };

  const deleteBookmarkHandler = () => {
    dispatch(deleteBookmark(problemId));
    dispatch(getBookmarks());
  };

  return (
    <td className="bookmarkIcon" key={index}>
      {bookmarks !== undefined && bookmarks.includes(problemId) ? (
        <FaBookmark color="blue" onClick={deleteBookmarkHandler} />
      ) : (
        <FaRegBookmark color="blue" onClick={addBookMarkHandler} />
      )}
    </td>
  );
};

export default BookmarkUIComponent;

import { useEffect, useState } from "react";

const Store = () => {
  const LOCAL_STORAGE_KEY = "bookMarks";
  const [bookmarks, setBookmarks] = useState([]);
  const [filteredProblems, setFilteredProblems] = useState();

  useEffect(() => {
    const retrivedBookmarks = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrivedBookmarks) setBookmarks(retrivedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  return {
    bookmarks,
    setBookmarks,
    filteredProblems,
    setFilteredProblems,
  };
};

export default Store;

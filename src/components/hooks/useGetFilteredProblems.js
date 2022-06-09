import { useState } from "react";

const useGetBookmarks = () => {
  const [filteredProblems, setFilteredProblems] = useState();

  return {
    filteredProblems,
    setFilteredProblems,
  };
};

export default useGetBookmarks;

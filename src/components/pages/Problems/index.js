import React, { useEffect, useState } from "react";
import Table from "../../organisms/Table";
import "../style.css";
import ReactPaginate from "react-paginate";
import Column from "../../molecules/problem/Column";
import useGetAllProblems from "../../hooks/useGetAllProblems";
import { useBetween } from "use-between";
import useGetBookmarks from "../../hooks/useGetFilteredProblems";
import { displayProblems } from "../../helper/displayProblems";
import SearchByName from "../../helper/SearchByName";
import Loader from "../../molecules/loader";

export const Problems = () => {
  const { column } = useBetween(Column);
  const { filteredProblems, setFilteredProblems } = useBetween(useGetBookmarks);
  const { problems } = useGetAllProblems();
  const [pageNumber, setPageNumber] = useState(0);
  const problemsPerPage = 14;
  const pagesVisited = pageNumber * problemsPerPage;

  useEffect(() => {
    setFilteredProblems(problems);
  }, [problems]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return problems === undefined || filteredProblems === undefined ? (
    <Loader />
  ) : (
    <div className="tableWrapper">
      <input
        className="input"
        placeholder="Search Problem Name"
        onChange={(e) => {
          const { filteredProblemsByName } = SearchByName(e, problems);
          setFilteredProblems(filteredProblemsByName);
        }}
      />

      <Table
        tableData={displayProblems(
          filteredProblems,
          pagesVisited,
          problemsPerPage
        )}
        column={column}
      />

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(filteredProblems.length / problemsPerPage)}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

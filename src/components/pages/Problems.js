import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import Table from "../organisms/showList/Table";
import "./List.css";
import ReactPaginate from "react-paginate";
import Column from "../molecules/problem/UseColumn";
import useGetAllProblemData from "../../hooks/useGetAllProblemData";
import { useBetween } from "use-between";
import Store from "../molecules/problem/Store";
import { displayProblems } from "../molecules/problem/displayProblems";
import SearchByName from "../molecules/problem/SearchByName";

export const Problems = () => {
  const { column } = useBetween(Column);
  const { filteredProblems, setFilteredProblems } = useBetween(Store);
  const { problems } = useGetAllProblemData();
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
    <div className="app">
      <GridLoader color="#0b66c2" />
    </div>
  ) : (
    <div className="margin">
      <input
        className="input"
        placeholder="Search Problem Name"
        onChange={(e) => {
          const { tempFilteredProblems } = SearchByName(e, problems);
          setFilteredProblems(tempFilteredProblems);
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

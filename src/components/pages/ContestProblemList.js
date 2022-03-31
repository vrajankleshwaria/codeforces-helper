import React from "react";
import { useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import Table from "../organisms/showList/Table";
import column from "../molecules/contestProblem/Column";
import "./List.css";
import useGetProblemData from "../../hooks/useGetProblemData";

const ContestProblemList = () => {
  const { id } = useParams();
  const { problemList } = useGetProblemData(id);

  return problemList === undefined ? (
    <div className="app">
      <GridLoader color="#0b66c2" />
    </div>
  ) : (
    <div className="margin">
      <Table tableData={problemList} column={column} />
    </div>
  );
};

export default ContestProblemList;

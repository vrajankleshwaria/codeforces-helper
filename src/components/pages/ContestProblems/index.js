import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../organisms/Table";
import column from "../../molecules/contestProblem/Column";
import "../style.css";
import useGetContestProblems from "../../hooks/useGetContestProblems";
import Loader from "../../molecules/loader";

const ContestProblems = () => {
  const { id } = useParams();
  const { problemList } = useGetContestProblems(id);

  return problemList === undefined ? (
    <Loader />
  ) : (
    <div className="tableWrapper">
      <Table tableData={problemList} column={column} />
    </div>
  );
};

export default ContestProblems;

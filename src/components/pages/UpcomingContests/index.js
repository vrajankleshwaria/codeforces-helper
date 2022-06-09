import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "../style.css";
import useGetAllContests from "../../hooks/useGetAllContests";
import Table from "../../organisms/Table";
import column from "../../molecules/upComingContest/Column";
import Loader from "../../molecules/loader";

export const UpcomingContests = () => {
  const contestStatus = "BEFORE";
  const { filteredContest } = useGetAllContests(contestStatus);

  return filteredContest.length === 0 ? (
    <Loader />
  ) : (
    <div className="tableWrapper">
      <Table tableData={filteredContest} column={column} />
    </div>
  );
};

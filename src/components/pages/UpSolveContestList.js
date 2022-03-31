import "react-loading-skeleton/dist/skeleton.css";
import { GridLoader } from "react-spinners";
import useGetContestData from "../../hooks/useGetContestData";
import Table from "../organisms/showList/Table";
import column from "../molecules/upSolveContest/Column";
import "./List.css";

export const UpSolveContestList = () => {
  const contestStatus = "FINISHED";
  const { filterContest } = useGetContestData(contestStatus);

  return filterContest.length === 0 ? (
    <div className="app">
      <GridLoader color="#0b66c2" />
    </div>
  ) : (
    <div className="margin">
      <Table tableData={filterContest} column={column} />
    </div>
  );
};

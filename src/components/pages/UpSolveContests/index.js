import "react-loading-skeleton/dist/skeleton.css";
import useGetAllContests from "../../hooks/useGetAllContests";
import Table from "../../organisms/Table";
import column from "../../molecules/upSolveContest/Column";
import "../style.css";
import Loader from "../../molecules/loader";

export const UpSolveContests = () => {
  const contestStatus = "FINISHED";
  const { filteredContest } = useGetAllContests(contestStatus);

  return filteredContest.length === 0 ? (
    <Loader />
  ) : (
    <div className="tableWrapper">
      <Table tableData={filteredContest} column={column} />
    </div>
  );
};

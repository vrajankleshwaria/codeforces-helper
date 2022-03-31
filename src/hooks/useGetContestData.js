import { useEffect, useState } from "react";
import fetchData from "../common/fetchData";
import _ from "lodash";

const useGetContestData = (contestStatus) => {
  const [contest, setContests] = useState();
  const [filterContest, setFilterContest] = useState([]);

  function ConvertToHours(seconds) {
    return (seconds / 3600).toString() + " Hours";
  }

  function tp(startTimeSeconds) {
    let date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(startTimeSeconds);
    return date;
  }

  useEffect(() => {
    fetchData("https://codeforces.com/api/contest.list").then((data) =>
      setContests(data)
    );
  }, []);

  useEffect(() => {
    if (contest !== undefined) {
      let tempContest = [];
      let keys = ["id", "name", "type", "durationSeconds", "startTime"];
      _.map(contest.data.result, (contest) => {
        if (contest.phase === contestStatus) {
          let object = {};
          object[keys[0]] = contest.id;
          object[keys[1]] = contest.name;
          object[keys[2]] = contest.type;
          object[keys[3]] = ConvertToHours(contest.durationSeconds);
          object[keys[4]] = tp(contest.startTimeSeconds);
          tempContest.push(object);
        }
      });

      setFilterContest(tempContest);
    }
  }, [contest]);

  return { filterContest };
};

export default useGetContestData;

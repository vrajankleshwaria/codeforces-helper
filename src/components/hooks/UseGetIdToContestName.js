import { useEffect, useState } from "react";
import fetchData from "../../helper/fetchData";
import _ from "lodash";

const useGetIdToContestName = () => {
  const [contests, setContests] = useState();
  const [idToContestName, setIdToContestName] = useState();

  useEffect(() => {
    fetchData("https://codeforces.com/api/contest.list").then((data) =>
      setContests(data)
    );
  }, []);

  useEffect(() => {
    if (contests !== undefined) {
      let object = {};
      _.map(contests.data.result, (contest) => {
        object[contest.id] = contest.name;
      });
      setIdToContestName(object);
    }
  }, [contests]);

  return { idToContestName };
};

export default useGetIdToContestName;

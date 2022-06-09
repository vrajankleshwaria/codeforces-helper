import { useEffect, useState } from "react";
import fetchData from "../helper/fetchData";
import _ from "lodash";

const useGetContestProblems = (id) => {
  const [data, setData] = useState();
  const [problemList, setProblemList] = useState();

  useEffect(() => {
    fetchData(
      `https://codeforces.com/api/contest.standings?contestId=${id}&from=1&count=1`
    ).then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      let filterProblemList = [];
      const keys = ["id", "name", "rating", "contestId"];
      _.map(data.data.result.problems, (curProblem) => {
        let object = {};
        object[keys[0]] = curProblem.index;
        object[keys[1]] = curProblem.name;
        object[keys[2]] = curProblem.rating ?? "-";
        object[keys[3]] = curProblem.contestId;
        filterProblemList.push(object);
      });
      setProblemList(filterProblemList);
    }
  }, [data]);

  return { problemList };
};

export default useGetContestProblems;

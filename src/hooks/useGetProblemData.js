import { useEffect, useState } from "react";
import fetchData from "../common/fetchData";
import _ from "lodash";

const useGetProblemData = (id) => {
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
      let tempProblemList = [];
      let keys = ["id", "name", "rating", "contestId"];
      _.map(data.data.result.problems, (curProblem) => {
        let object = {};
        object[keys[0]] = curProblem.index;
        object[keys[1]] = curProblem.name;
        object[keys[2]] = curProblem.rating ?? "-";
        object[keys[3]] = curProblem.contestId;
        tempProblemList.push(object);
      });
      setProblemList(tempProblemList);
    }
  }, [data]);

  return { problemList };
};

export default useGetProblemData;

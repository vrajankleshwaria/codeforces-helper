import { useEffect, useState } from "react";
import fetchData from "../common/fetchData";
import _ from "lodash";

const useGetContestData = () => {
  const [problemsRawData, setProblemsRawData] = useState();
  const [contests, setContests] = useState();
  const [problems, setProblems] = useState();
  const [idToContestName, setIdToContestName] = useState();

  useEffect(() => {
    fetchData("https://codeforces.com/api/contest.list").then((data) =>
      setContests(data)
    );
    fetchData("https://codeforces.com/api/problemset.problems").then((data) => {
      return setProblemsRawData(data);
    });
  }, []);

  useEffect(() => {
    if (problemsRawData !== undefined) {
      let tempProblems = [];
      let keys = ["contestId", "id", "name", "rating", "contestName"];
      _.map(problemsRawData.data.result.problems, (problem) => {
        let object = {};
        object[keys[0]] = problem.contestId;
        object[keys[1]] = problem.index;
        object[keys[2]] = problem.name;
        object[keys[3]] = problem.rating ?? "-";
        object[keys[4]] = idToContestName[problem.contestId];
        tempProblems.push(object);
      });
      setProblems(tempProblems);
    }
  }, [problemsRawData]);

  useEffect(() => {
    if (contests !== undefined) {
      let object = {};
      _.map(contests.data.result, (contest) => {
        object[contest.id] = contest.name;
      });
      setIdToContestName(object);
    }
  }, [contests]);

  return { problems };
};

export default useGetContestData;

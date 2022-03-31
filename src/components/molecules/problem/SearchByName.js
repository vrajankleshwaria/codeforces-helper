import _ from "lodash";

const SearchByName = (e, problems) => {
  const searchString = e.target.value;
  let tempFilteredProblems = [];

  _.map(problems, (problem, index) => {
    if (problem.name.toLowerCase().includes(searchString.toLowerCase())) {
      tempFilteredProblems.push(problem);
    }
  });

  return { tempFilteredProblems };
};

export default SearchByName;

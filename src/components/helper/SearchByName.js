import _ from "lodash";

const SearchByName = (e, problems) => {
  const searchString = e.target.value;
  let filteredProblemsByName = [];

  _.map(problems, (problem) => {
    if (problem.name.toLowerCase().includes(searchString.toLowerCase())) {
      filteredProblemsByName.push(problem);
    }
  });

  return { filteredProblemsByName };
};

export default SearchByName;

export const displayProblems = (problems, pagesVisited, problemsPerPage) => {
  const _problems = problems.slice(
    pagesVisited,
    pagesVisited + problemsPerPage
  );
  return _problems;
};

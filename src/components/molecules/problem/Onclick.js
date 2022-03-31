const onclick = (row) => {
  const { contestId, id } = row;
  return window.open(
    `https://codeforces.com/contest/${contestId}/problem/${id}`
  );
  // noopener noreferrer
};

export default onclick;

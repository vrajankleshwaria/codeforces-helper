const contestTypeAccessor = (data) => {
  const { row, index } = data;
  const { contestName } = row;
  const label = contestName;
  return { index, label };
};

export default contestTypeAccessor;

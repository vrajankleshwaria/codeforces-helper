const startsAccessor = (props) => {
  const { row, index } = props;
  const { startTime } = row;
  const label = startTime;
  return { index, label };
};

export default startsAccessor;
